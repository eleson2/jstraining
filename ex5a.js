// Example 5 -
// Nested routing 
// And static files provisioning

const express  = require('express');

// Include your own JS files for each URI. 
const myFirst = require('./urls/first');

// Create the appl object. 
const myApp = express();

myApp.use('/first', myFirst);
myApp.use('/images', express.static('images'));
myApp.use('/images', express.static('images2'));

var port = process.env.PORT || 3000;
var server = myApp.listen(port);