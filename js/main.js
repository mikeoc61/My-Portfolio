import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

/*
Note: need to run "npm run webpack" for any changes to be visible
*/

const myWork = [
  {
    'title': "Serverless Portfolio",
    'href': "https://github.com/mikeoc61/My-Portfolio",
    'desc': "Dynamic Portfolio project written in Javascript and utilizing Github, SSH, HTML, CSS, Font Awesome, Google Fonts, React, NPM, webpack, babel and jest.  When changes are pushed to github the code is picked up by AWS CodePipeline and built using AWS CodeBuild. Lambda puts the finished product into an S3 bucket which serves as the HTML root for my portfolio website (portfolio.mikeoc.me). AWS SNS notifies me when the build happens and if the deploy is successful.",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example_2.jpg",
      'comment': ""
    }
  },
  {
    'title': "Currency Monitor",
    'href': "https://github.com/mikeoc61/currency_monitor",
    'desc': "Monitors basket of foreign currencies for changes relative to USD and displays color coded changes on console. Utilizes DyanmoDB as a persistent datastore so that current rates can be compared with saved rates and change can be calculaed. Also utilizes S3 and CloudFront CDN to store static CSS and Header HTML.",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/currency.jpg",
      'comment': ""
    }
  },
  {
    'title': "Seismic Activity",
    'href': "https://github.com/mikeoc61/Seismic-Reporting.git",
    'desc': "Queries USGS Earthquake data and lists events sorted by increasing distance from specified longitude and latitude.",
    'image': {
      'desc': "Query USGS Data",
      'src': "images/quakes_code.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Lambda Event Handler",
    'href': "https://github.com/mikeoc61/aws-lambda-get-event-detail.git",
    'desc': "AWS Lambda event handler that queries information about the function execution environment and returns that information nicely formatted as a web page.",
    'image': {
      'desc': "Lambda Event Handler",
      'src': "images/Lambda_Events.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Button / IFTTT",
    'href': "https://github.com/mikeoc61/IFTTT-Stuff",
    'desc': "Code used to integrate linux shell or AWS IoT Button (via AWS Lambda) with IFTTT, typically for home automation.",
    'image': {
      'desc': "AWS IoT IFTTT Code",
      'src': "images/example_3.jpg",
      'comment': ""
    }
  },
  {
    'title': "Web Site Monitor",
      'href': "https://github.com/mikeoc61/Web_Site_Monitor",
      'desc': "Monitors the specified URL for availability, latency and for change by computing and comparing a SHA1 hash. If configured, program also uses AWS boto3 to provide alerts via SNS and prompts use for AWS Profile and Mobile #. Both command line and GUI version are provided with the GUI developed using the tkinter module",
      'image': {
        'desc': "URL Monitor with AWS SNS integration",
        'src': "images/AWS_logo.jpg",
        'comment': ""
      }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
