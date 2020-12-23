// Example 2 -
// Using express router
const express  = require('express');

// Include your own JS files for each URI. 
const myIndex  = require('./urls/index');
const myAbout  = require('./urls/about');
const myPages  = require('./urls/pages');

// Create the appl object.
const myApp = express();

myApp.use('/', myIndex);
myApp.use('/about', myAbout);
myApp.use('/pages', myPages);  // << Fill in the rest >>

var port = process.env.PORT || 3000;
var server = myApp.listen(port);