// Example 1 - written out.
const express  = require('express');
const myApp = express();
                                        console.log('1');

function MainPageCB(req,res) {          console.log('2');
  res.send('Hello world Ex1b');
};
                                        console.log('3');

myApp.use('/',MainPageCB);              console.log('4');

var port = process.env.PORT || 3000;
var server = myApp.listen(port);        console.log('5');
