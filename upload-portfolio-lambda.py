#####
#
# Lambda function normally invoked by CodePipeline when a change is detected in GitHub
# source. CodeBuild creates a compressed archive file in an S3 build bucket and this
# code is them used to populate the target S3 bucket which is also HTML root for my
# portfolio URL of http://portfolio.mikeoc.me
#
# Code based on example provided in CodeAcademy Course
#
#   "Make your Portfolio Dynamic with ReactJS"
#
# Reference code @ https://github.com/robin-acloud/my-portfolio/
#
# Author: Michael O'Connor
#
# Last Change: September 17, 2017
#
#####

import boto3
from   botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    # Provide pointer to SNS resource we will use to notify subscribers

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:180587510551:deployPortfolioTopic')

    # Define target S3 bucket which serves as HTML root for portfolio website

    targetBucket = 'portfolio.mikeoc.me'

    # When calling this Lambda function manually, define an intermediate build location

    location = {
        "bucketName": 'portfoliobuild.mikeoc.me',
        "objectKey": 'portfoliobuild.zip'
    }

    # Normal path through following code will be triggered by CodePipeline

    try:
        job = event.get("CodePipeline.job")                 # Get info from CodePipeline

        # Determine build bucket and zipfile locations

        if job:                                             # If invoked from CodePipeline
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]

        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

        print "Building portfolio from: " + str(location)

        portfolio_bucket = s3.Bucket(targetBucket)          # target bucket
        build_bucket = s3.Bucket(location["bucketName"])    # source bucket

        # Copy newly built zip archive contents into memory

        portfolio_zip = StringIO.StringIO()                 # Create an in memory buffer

        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)

        # Now, copy the individual zipfile contents into the target S3 bucket,
        # set metadata appropriately and access permissions to public

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                print "Now processing file: " + nm
                obj = myzip.open(nm)
                if nm == "index.html":                          # add specific metadata
                    portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': 'text/html;charset=utf-8'})
                else:
                    portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})

                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')    # Make World readable

        # Update logs

        print "Portfolio Lambda Function complete"

        # Update CodePipeline if applicable

        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])

        # Update SNS Topic if everything worked as expected

        topic.publish(Subject="Portfolio Deployed", Message="Deployed Successfully!")

    # If code experiences an error, publish to SNS and raise as exception error

    except:
        topic.publish(Subject="Portfolio Deploy Fail", Message="Deploy Failed!")
        raise

    return 'Hello from Lambda'
