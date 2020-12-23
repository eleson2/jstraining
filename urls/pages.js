const myExpress = require('express');
const routes = myExpress.Router();

function pagesCB(req, res) {
  res.send('Welcome to a page.');
};

routes.get('/', pagesCB );
module.exports = routes;