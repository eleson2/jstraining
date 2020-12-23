const myExpress = require('express');
const routes = myExpress.Router();

function indexCB(req, res) {
  res.send('Welcome to this webpage!');
};
routes.get('/', indexCB );

module.exports = routes;