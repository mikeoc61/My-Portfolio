import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

/*
This code controls content displayed when clicking on a Portfolio
project sample as well as the background image used on the main page.

Note: need to run "npm run webpack" for any changes to be visible
*/

const myWork = [
  {
    'title': "This Serverless Portfolio",
    'href': "https://github.com/mikeoc61/My-Portfolio",
    'desc': "Dynamic Portfolio project written in Javascript and \
             utilizing Github, SSH, HTML, CSS, Font Awesome, Google Fonts, \
             React, NPM, webpack, babel and jest.  When changes are pushed to \
             github the code is picked up by AWS CodePipeline and built using \
             AWS CodeBuild. Lambda unpacks the finished product into an S3 bucket \
             which serves as the HTML root for my portfolio website \
             (https://portfolio.mikeoc.me). AWS SNS notifies me when the build \
             completes and if the deployment was successful.",
    'image': {
      'desc': "Serverless Professional Portfolio",
      'src': "images/example_2.jpg",
      'comment': ""
    }
  },
  {
    'title': "Serverless Currency Exchange Rates",
    'href': "https://github.com/mikeoc61/currency_monitor",
    'desc': "Function as a Service (FaaS) implementation which monitors a basket \
             of foreign currencies for \
             changes relative to USD. Utilizes Currency Layer service for \
             latest exchange rate quotes, AWS API Gateway and Lambda for integration, \
             routing and execution and AWS DynamoDB is used as a persistent \
             datastore so that current rates can be compared with previously \
             saved rates and change percentages calculated. Utilizes AWS S3 Storage \
             and CloudFront CDN to distribute CSS, Header and Footer HTML to client browser",
    'image': {
      'desc': "Serverless Currency Rate Tracker",
      'src': "images/CurrencyEx.jpg",
      'comment': ""
    }
  },
  {
    'title': "USGS Seismic Activity",
    'href': "https://github.com/mikeoc61/Seismic-Reporting.git",
    'desc': "Queries USGS Earthquake data collected over the past day, week \
             or month and lists seismic events sorted by magnitude, name or \
             distance. Distance is determined by taking the user's IP address to \
             identify local longitude and latitude and using the Haversine \
             formula to calculate the distance between the user and event on \
             the surface of a sphere.",
    'image': {
      'desc': "Query and Sort USGS Earthquake Data",
      'src': "images/quakes_code.jpg",
      'comment': ""
    }
  },
  {
    'title': "Lambda Event Detail",
    'href': "https://github.com/mikeoc61/aws-lambda-get-event-detail.git",
    'desc': "AWS Lambda event handler that returns detailed information about the \
             function's execution environment as a nicely formatted web page. \
             Since Lambda is returning HTML vs. standard JSON, API Gateway's default \
             behavior needs to be modified so that the integration response \
             does not corrupt HTML",
    'image': {
      'desc': "Lambda Event Detail",
      'src': "images/Lambda_Events.png",
      'comment': ""
    }
  },
  {
    'title': "Web Site Monitor",
      'href': "https://github.com/mikeoc61/Web_Site_Monitor",
      'desc': "Monitors a specified URL for availability, latency and \
               change by computing and comparing a SHA1 hash. If configured, \
               program also uses AWS boto3 to provide alerts via SNS and \
               prompts user for AWS Profile and Mobile #. Both command line \
               and GUI version are provided. GUI developed using the tkinter \
               module",
      'image': {
        'desc': "URL Monitor with AWS SNS integration",
        'src': "images/AWS_logo.jpg",
        'comment': ""
      }
  },
  {
    'title': "AWS Button / IFTTT",
    'href': "https://github.com/mikeoc61/IFTTT-Stuff",
    'desc': "Code used to integrate linux shell or AWS IoT Button \
             (via AWS Lambda) with IFTTT, typically for home automation.",
    'image': {
      'desc': "AWS IoT IFTTT Code",
      'src': "images/example_3.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
