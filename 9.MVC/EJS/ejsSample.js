var express = require('express');
var app = express();
const path = require('path')

app.listen(7070,()=>{

  console.log("Server started with port number 7070")
});

var ejs =require('ejs');

app.set("view engine", "ejs");

app.set('views', path.join(__dirname, '/views'))

app.get("/",(req,res)=>{

  var model = {name:"suresh",email:"suresh@yopmail.com",phone:9603212151,marks:25,subjects:[{subjectName:"maths",marks:100},{subjectName:"english",marks:100}]};
  res.render('index',model);

});

app.get("/login",(req,res)=>{

  res.render('login');

});