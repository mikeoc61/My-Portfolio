#
# Python 2 code for use by AWS Lambda
#
# Code will take a zip archive of my portfolio from the source bucket in S3
# and copy file by file to the target S3 bucket which serves as the content for my
# portfolio web side
#
# Michael O'Connor - 9/12/17
#
####################################

import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    portfolio_bucket = s3.Bucket('portfolio.mikeoc.me')     # target bucket
    build_bucket = s3.Bucket('portfoliobuild.mikeoc.me')    # source bucket

    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)  # import code archive

    with zipfile.ZipFile(portfolio_zip) as myzip:           # for each file in compressed archive
        for nm in myzip.namelist():                         # copy file to target bucket
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)    
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

    print "Portfolio Lambda Function complete"
    
    return 'Hello from Lambda'
