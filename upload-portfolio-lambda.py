#####
# Lambda code invoked by CodePipeline when a change is detected in GitHub source
# CodeBuild will create a compressed archive file in an S3 build bucket and this
# code will populate the target S3 bucket which is also HTML root for my portfolio
# URL of http://portfolio.mikeoc.me
#
# Code is based on example provided in CodeAcademy Course titled 
#
#   "Make your Portfolio Dynamic with ReactJS"
#
# Author: Michael O'Connor
#
# Last Change: September 14, 2017
#
#####

import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):


    # Provide pointer to SNS resource will will use to notify me of updates
    
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:180587510551:deployPortfolioTopic')
    
    # Define target S3 bucket which serves as HTML root for portfolio website
   
    targetBucket = 'portfolio.mikeoc.me'                
    
    # Define intermediate S3 build bucket used as output of CodeBuild
    # Only referenced when this Lambda function is invoked manually

    location = {                                        
        "bucketName": 'portfoliobuild.mikeoc.me',
        "objectKey": 'portfoliobuild.zip'
    }

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    
    # Normal path through following code will be triggered by CodePipeline
    
    try:
        job = event.get("CodePipeline.job")                 # Get info from CodePipeline
        
        # Determine build bucket and zipfile locations
        
        if job:                                              
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
                    
        print "Building portfolio from: " + str(location)
        
        portfolio_bucket = s3.Bucket(targetBucket)          # target bucket
        build_bucket = s3.Bucket(location["bucketName"])    # source bucket
    
        portfolio_zip = StringIO.StringIO()                 # bring archive contents into memory
 
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)
    
        with zipfile.ZipFile(portfolio_zip) as myzip:       # for each file in compressed archive
            for nm in myzip.namelist():                     # copy file to target bucket
                    obj = myzip.open(nm)
                    portfolio_bucket.upload_fileobj(obj, nm,
                       ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                    portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
    
        # Update logs
    
        print "Portfolio Lambda Function complete"
        
        # Now update SNS
    
        topic.publish(Subject="Portfolio Deployed", Message="Deployed Successfully!")
        
        # Now Update CodePipeline
        
        if job:                                                 
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
            
    except:                                                     # Something has gone wrong
        topic.publish(Subject="Portfolio Deploy Fail", Message="Deploy Failed!")
        raise
    
    return 'Hello from Lambda'
