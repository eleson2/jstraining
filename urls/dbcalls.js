var myExpress = require('express');
// New remember to npm install sqlite3
var SQLite = require('sqlite3');  

var myRouter = myExpress.Router();

var db = new SQLite.Database('./db/oh2.db');  

myRouter.get('/', myEmpsCB);
myRouter.get('/all', myEachEmpCB);
myRouter.get('/:Empno', myOneEmpCB);
myRouter.get('/param/:Empno', myOneEmpParamCB);

// Callbacks below 

function myEmpsCB(req, res) {
  function retSQL(err,rows) {
    res.json(rows);
  }
  db.all('select Firstname,Lastname from emp',retSQL );
};

function myOneEmpCB(req, res) {
  function retSQL(err,row) {
      res.json(row);
  };
  db.get('select Firstname,Lastname from emp where Empno = ' + 
         req.params.Empno, retSQL);
};

function myOneEmpParamCB(req, res) {
  function retSQL(err,row) {
      res.json(row);
  };
  db.get('select Firstname,Lastname from emp where Empno = ?',  
         req.params.Empno, 
         retSQL);
};

function myEachEmpCB(req, res) {
  var str = []
  function Each(err,row) {
    str.push(row) // Add item to array 
  };
  function Completed(err) {
    res.json(str);
  };

  db.each('select Firstname,Lastname from emp',Each,Completed );
};

module.exports = myRouter;