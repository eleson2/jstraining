// Example 2 -
// Using express router!
var express  = require('express');

// Include your own  JS files for each URI. 
var myIndex  = require('./urls/index');
var myAbout  = require('./urls/about');

// Create the appl object.
var myApp = express();

myApp.all('/about', myAbout);
myApp.all('/', myIndex);


var port = process.env.PORT || 3000;
var server = myApp.listen(port);