const myExpress = require('express');
const routes = myExpress.Router();

function pagesCB(req, res) {
  res.send('Welcome to a page.');
};

function specificCB(req, res) {
  res.send('Welcome to a specific page.');
};

routes.get('/', pagesCB );
routes.get('/specific', specificCB );
module.exports = routes;