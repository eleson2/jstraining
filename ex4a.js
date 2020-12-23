// Example 4 -
// database communications 
const express  = require('express');

// Include your own JS files for each URI. 
const myIndex = require('./urls/index');
const myAbout = require('./urls/about');
const myPages = require('./urls/pages');
const myResources = require('./urls/resources');
const myDBCalls = require('./urls/dbcalls');

// Create the appl object. 
const myApp = express();

myApp.use('/', myIndex);
myApp.use('/about', myAbout);
myApp.use('/pages', myPages);
myApp.use('/resources', myResources);  
myApp.use('/dbcalls', myDBCalls);  

var port = process.env.PORT || 3000;
var server = myApp.listen(port);