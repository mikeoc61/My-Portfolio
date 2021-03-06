# Michael O'Connor's portfolio

This is my professional software development portfolio.

## Technologies used

- Python

- Git and GitHub

- HTML, CSS, Font Awesome, Google Fonts

- React, NPM, webpack, babel, jest

- AWS: S3, Lambda, Codebuild, Codepipeline, Cloudfront

## Deployment

This project is deployed as the source content for https://portfolio.mikeoc.me.
AWS CodePipeline regularly monitors the GitHub project for any updates and then invokes
AWS Codebuild and Lambda to pull, build, test and deploy the project content to an AWS S3
bucket.

Note: since this code was developed on MacOS, I've ommited package-lock.json so that automatic builds on Linux at AWS as part of the deployment pipeline will not choke on MacOS specific dependencies such as as the fsevents package.

### Test locally

```
> "npm run webpack"
> "open index.html"
```

### Sync with GitHub and push to AWS

```
> "git status"
> "git add <changed file(s)>"
> "git commit -m "<brief description of change>"
> "git push"
```
