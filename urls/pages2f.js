const myExpress = require('express');
const routes = myExpress.Router();

function pagesCB(req, res) {
  res.send('Welcome to a page.');
};

function specificCB(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('Welcome to a specific ' + req.params.page +' page.');
};

routes.get('/', pagesCB );
routes.get('/specific', specificCB );
routes.get('/specific/:page', specificCB );

module.exports = routes;