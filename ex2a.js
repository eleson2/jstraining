// Example 2 -
// Using express router!
const express  = require('express');
const myApp = express()


function MainPageCB(req,res) {
  res.send('Hello world Ex2a');
};

function AboutPageCB(req,res) {
  res.send('Written by myself.');
};

myApp.use('/about', AboutPageCB);
myApp.use('/', MainPageCB);

var port = process.env.PORT || 3000;
var server = myApp.listen(port);