const routes = require('express').Router();
// get the next level
const mySecond = require('./second');

function firstCB(req, res) {
  res.send('Welcome to first level page.');
};

routes.get('/', firstCB );

routes.use('/second', mySecond );
module.exports = routes;