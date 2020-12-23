// ex9a - call an external json API
//
const express  = require('express');
const myApp = express()
var http = require('http');


function callPage(req,respToBrowser) {
  

  // jsonplaceholder.typicode.com/posts/1
  const options = {  
    hostname: 'localhost',
    port: 3000,
    path: '/data',
    method: 'GET' // ,
    //headers:{'Content-Type': 'application/json' } 
    
  };

  function retExtRespone(OutgoingResponse) {
    var jsResponse = "";

    function addChunk(data){
      jsResponse += data;
    };
    function completed(){
      respToBrowser.json(JSON.parse(jsResponse));
    };
    function errHandler(){
        console.log('error:');
    };

    // Handle events that arises from the outgoing call
    OutgoingResponse.on('data', addChunk);
    OutgoingResponse.on('end', completed);
    OutgoingResponse.on('error', errHandler);
  };

 http.request(options,retExtRespone).end();
};

function jsonPage(req,res) {
  res.json( {fname: 'erland', ename: 'Lestander' });
};

myApp.use('/data',jsonPage);
myApp.use('/call',callPage);

var port = process.env.PORT || 3000;
var server = myApp.listen(port);
