const myExpress = require('express');
const routes = myExpress.Router();
var path = require('path');

function secondCB(req, res) {
  res.send('Welcome to second level page.');
};


function webpageCB(req, res) {
  var P = path.join(__dirname + '/../html/page.html') ;
  console.log(__dirname);
  console.log(P);
  res.sendFile(P);
};


routes.get('/', secondCB );
routes.get('/web', webpageCB );
module.exports = routes;