const express  = require('express');
const myApp = express();

myApp.use('/',function(req,res) { res.send('Hello world ex1a'); });

myApp.listen(3000);