# Michael O'Connor's portfolio

This is my professional portfolio. It uses AWS and ReactJS

Project is based on the ACloudGuru Class entitled: 

	"Create a Serverless Portfolio with AWS and React"

## Technologies used

- Brew (Mac package manager)

- python and ipython

- Git and github

- HTML, CSS, Font Awesome, Google Fonts

- React NPM webpack babel jest

## Deployment

Project can be deployed locally or using AWS Serverless technology as described in the class.
In my case, this project is deployed as the source content for https://portfolio.mikeoc.me.
AWS Codebuild is used to monitor the Github project for updates and then to invoke Codebuild
and Lambda to deploy the project to an AWS S3 bucket which is managed by AWS CloudFront.
