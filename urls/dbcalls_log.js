//                          console.log('db calls 1');
var myExpress = require('express');
// New remember to npm install sqlite3
var SQLite = require('sqlite3');  

var myRouter = myExpress.Router();

var db = new SQLite.Database('./db/oh2.db');  
//                          console.log('db calls 2');

myRouter.get('/', myEmpsCB);
myRouter.get('/all', myEachEmpCB);
myRouter.get('/emp/', myOneEmpParamCB);
myRouter.get('/ex1/:Empno', myOneEmpPlaceHCB);
myRouter.get('/ex2/:Empno', myOneEmpCB);

// Callbacks below 
//                          console.log('db calls 3');

function myEmpsCB(req, res) {
  function retSQL(err,rows) {
    res.json(rows);
  }
  db.all('select Firstname,Lastname from emp',retSQL );
};

// use :3000/dbcalls/ex2/4 
// 
function myOneEmpCB(req, res) {
  function retSQL(err,row) {
      res.json(row);
  };
  db.get('select Firstname,Lastname from emp where Empno = ' + req.params.Empno, 
        retSQL);
};

// use :3000/dbcalls/ex1/4 
//
function myOneEmpPlaceHCB(req, res) {
  function retSQL(err,row) {
      res.json(row);
  };
  db.get('select Firstname,Lastname from emp where Empno = ?',  
         req.params.Empno, 
         retSQL);
};

// use :3000/dbcalls/emp?empno=4 
//
function myOneEmpParamCB(req, res) {
  function retSQL(err,row) {
      res.json(row);
  };

  for (ParName in req.query) {  // Try multiple parameters
    console.log(ParName);           // like :3000dbcalls/emp?empno=2&age=43&color=red
  };
    
   db.get('select Firstname,Lastname from emp where Empno = ?',  
       req.query.empno, // Old syntax: req.param('id');
       retSQL);
};


function myEachEmpCB(req, res) {
//                            console.log('db calls 4');
  var str = []
  function Each(err,row) {
//                            console.log('db calls 5');
    str.push(row) // Add item to array 
  };
  function Completed(err) {
//                            console.log('db calls 6');
    res.json(str);
  };
//                            console.log('db calls 7');
  db.each('select Firstname,Lastname from emp',Each,Completed );
//                            console.log('db calls 8');
};
//                            console.log('db calls 9');
module.exports = myRouter;