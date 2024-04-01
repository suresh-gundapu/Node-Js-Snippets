 /**
  * body-parser:
  * 
  * it is used to read kye value pair or values of form body while using post method in API counstruct or web HTML FORM
  * we have to install body parser 
  * 
  * how to read ?
  * --------------
  *  app.use(bodyParser.urlencoded({extended:false}))
  * app.use(bodyParser.json())
  **/

 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');

 app.listen(7070,()=>{
    console.log("Server started at port number 7070");
 });
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json()); // support json encoded bodies


var employees = []
app.get('/employees',(req,res)=>{
    res.json({
        "status":1,
        "data":employees
    });
});
app.post('/employeesAdd',(req,res)=>{
console.log(req.body);
var params = req.body;
employees.push(params);
res.json({
    "status":1,
    "data":"employees added successfully"
});

})
