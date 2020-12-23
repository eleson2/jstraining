// Example 2d -
// Using nodemon to simplify development, do:
// npm install -g nodemon 
// Try nodemon ex2d.js
const express  = require('express');

// Include your own  JS files for each URI. 
const myIndex  = require('./urls/index');
const myAbout  = require('./urls/about');
const myPages  = require('./urls/pages2f'); 

// Create the appl object.
const myApp = express();

myApp.use('/', myIndex);
myApp.use('/about', myAbout);
myApp.use('/pages', myPages);  

var port = process.env.PORT || 3000;
var server = myApp.listen(port);