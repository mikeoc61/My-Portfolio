import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "GetMacs Python Project",
    'href': "https://github.com/mikeoc61/GetMacs",
    'desc': "Simple Python function to scan a /24 address range and report MAC addresses for valid IPs.",
    'image': {
      'desc': "GetMacs Python Project",
      'src': "images/example_1.jpg",
      'comment': ""
    }
  },
  {
    'title': "Dynamic Serverless Portfolio",
    'href': "https://github.com/mikeoc61/My-Portfolio",
    'desc': "Dynamic Portfolio project written in Javascript and utilizing Github, SSH, HTML, CSS, Font Awesome, Google Fonts, React, NPM, webpack, babel and jest.  When changes are pushed to github the code is picked up by AWS CodePipeline and built using AWS CodeBuild. Lambda puts the finished product into an S3 bucket which serves as the HTML root for my portfolio website (https://portfolio.mikeoc.me) which is distributed by CloudFront. AWS SNS notifies me when the build happens and if the deploy is successful.",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example_2.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Button / IFTTT",
    'href': "https://github.com/mikeoc61/IFTTT-Stuff",
    'desc': "Code used to integrate linux shell or AWS IoT Button (via AWS Lambda) with IFTTT, typically for home automation",
    'image': {
      'desc': "AWS IoT IFTTT Code",
      'src': "images/example_3.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
