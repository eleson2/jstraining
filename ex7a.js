// Example 7 -
// Add middleware  = readers for 'all' requests
// that passes the request further down the chain.
const express  = require('express');

// Include your own  JS files for each URI. 
const myIndex  = require('./urls/index');
const myAbout  = require('./urls/about');

// Create the appl object.
const myApp = express();

function TimeLogMW(req, res, next) {
  console.log('Time:', Date.now() , 'URL:', req.originalUrl);
  next() //  <<< Indication of middleware calls next method in chain.
};


// Order is important.  
myApp.use(TimeLogMW);
myApp.use('/', myIndex);
myApp.use('/about', myAbout);

var port = process.env.PORT || 3000;
var server = myApp.listen(port);