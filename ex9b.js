// ex9b - call an external json API
// Usage
// localhost:3000/call/<1-100>
// localhost:3000/call/47
   
const express  = require('express');
const myApp = express();

//const routes = express.Router();

var http = require('http');
var globalTunnel = require('global-tunnel-ng');

globalTunnel.initialize({   // We need to go over a proxy.
  host: 'pxgot5.srv.volvo.com',
  port: 8080
});

const JSONProvider  = {  // Define de access to the JSON Provider
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts/1', 
  method: 'GET' ,
  headers: {'Content-Type': 'application/json' }
};

function callPage(req,respToBrowser) {
  // jsonplaceholder.typicode.com/posts/1

  function retExtRespone(OutgoingResponse) { 
    var jsResponse = "";
    OutgoingResponse.setEncoding('utf8');

    function addChunk(data) { jsResponse += data; };
    function completed()    { respToBrowser.json(JSON.parse(jsResponse)); };
    function errHandler()   { console.log('error:'); };

    // Handle events that arises from the outgoing call
    OutgoingResponse.on('data', addChunk);
    OutgoingResponse.on('end', completed);
    OutgoingResponse.on('error', errHandler);
  };

  var str = '/posts/'+ req.params.ID;
  JSONProvider.path =str
  http.request(JSONProvider,retExtRespone).end();
};

myApp.get('/call/:ID',callPage);

var port = process.env.PORT || 3000;
var server = myApp.listen(port);
