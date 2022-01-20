# image-processing-API

## Overview
This is a project for the Udacity **Nanodegree Full-Stack JavaScript Developer**.
The API can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. 
The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size.

## Get Started
Clone the repository and install all depencencies with `npm install`

To start the development server with typescript and through the nodemon run `npm run dev-server `

To test the project run `npm run test`

To prettifies and lints the code run `npm run prettier` and `npm run lint`

To compiles the typescript files to javascript run `npm run build`

To run production ready server afetr it is build `npm start`

## Technologies
- **typescript**
- **expres.js** **node.js** for the Back-End Development
- **jasmine** for testing the code
- **git**
- **eslint** and **prettier** for linting and formatting the code
- **sharp** for image resizing functionality
- **Memory-cache** for caching requested url
- **supertest** to support Jasmine with endpoint testing

## Starting the Server & resizing the image on the endpoint
Once the server is started with `npm start`, you can epxect the image serverd from serevr by typing an filename (jpg), width, and height.
 filename must be one of:
 - fjord
 - santamonica
 - palmtunnel
 - encenadaport
 - icelandwaterfall

*example*: http://localhost:3000/api/image?filename=fjord&width=400&height=400

## Author
**_[Krzysztof Kaluza](https://www.linkedin.com/in/krzysztof-kaluza-5996b0147/)_**