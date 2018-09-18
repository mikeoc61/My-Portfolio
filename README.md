# Michael O'Connor's portfolio

This is my professional portfolio. It uses AWS and ReactJS

Project is based on the ACloudGuru Class entitled:

	"Create a Serverless Portfolio with AWS and React"

## Technologies used

- Brew (Mac package manager)

- python and ipython

- Git and github

- HTML, CSS, Font Awesome, Google Fonts

- React, NPM, webpack, babel, jest

## Deployment

Project can be deployed locally or using AWS Serverless technology.
In my case, this project is deployed as the source content for https://portfolio.mikeoc.me.
AWS CodePipeline regularly monitors the Github project for any updates and then invokes
AWS Codebuild and Lambda to pull, build, test and deploy the project content to an AWS S3
bucket.

Note: since this code was developed on MacOS, I've ommited package-lock.json so that automatic builds on Linux at AWS as part of the deployment pipeline will not choke on MacOS specific dependencies such as as the fsevents package.

Following edits to this project, simply run:
- "npm run webpack"
- "git add <changed file(s)>"
- "git commit -m "<what changed>"
- "git push"
