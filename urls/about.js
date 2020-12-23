const myExpress = require('express');
const routes = myExpress.Router();

function aboutCB(req, res) {
  res.send('Abourt this module.');
};
routes.get('/', aboutCB );

module.exports = routes;