const myExpress = require('express');
const routes = myExpress.Router();

function jsonanswerCB(req, res) {
  res.json({ message: 'Erland' });
};

function empCB(req, res) {
  res.json({empno: req.params.empno,
     firstname: 'Erland'});
};

routes.get('/', jsonanswerCB );
routes.get('/emp/:empno', empCB );
module.exports = routes;