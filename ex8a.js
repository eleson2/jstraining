// ex8a - use events
// Add console.log's to see order...
const express  = require('express');
const myApp = express()

//const events = require('events');
//const myEE = new events.EventEmitter;
// Or with chaining:
 const myEE = new (require('events').EventEmitter);

myEE.on('TestEvent', returnPageEV);  // Create 'TestEvent' and register returnPage to that event.

function returnPageEV(req,res) {
  res.send( 'Returned from event' );
};

function MainPageCB(req,res) {
  myEE.emit('TestEvent',req,res); // Send a 'TestEvent'
};

myApp.use('/',MainPageCB);
var port = process.env.PORT || 3000;
var server = myApp.listen(port);
