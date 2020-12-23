// ex2a - Returning a json object.
const express  = require('express');
const myApp = express()

function MainPage(req,res) {
  res.json( { message: 'Hello world Ex1c' } );
};

myApp.use('/',MainPage);
var port = process.env.PORT || 3000;
var server = myApp.listen(port);