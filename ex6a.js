// Example 6 -
// Set up node for multi core support
// first example of event handling
//
const cluster = require('cluster');
var numCPUs = require('os').cpus().length;   // Chaining !! 

//Can this be chained? 
const express  = require('express');
const myApp = express();



// Start of cluster setup
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) { cluster.fork(); };
  
  cluster.on('exit', (worker, code, signal) => {
       console.log(`worker ${worker.process.pid} died`);
    }
  );
} else {
// Anonymous function assigned to variable//object.
  var MainPage = function (req,res) {
    res.send('Hello world Ex6a');
  };
  //Same old, same old....
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  myApp.use('/',MainPage);
  var port = process.env.PORT || 3000;
  var server = myApp.listen(port);

  console.log(`Worker ${process.pid} started`);
};


