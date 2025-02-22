var express = require('express');

var app = express();

app.listen(7071,()=>{
console.log("Server started with port number 7071");
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies
app.get("/",(req,res)=>{

  res.sendFile(__dirname + "/login.html");

});

app.post("/login",(req,res)=>{
  console.log(req.body);
  if(req.body.uname == "admin" && req.body.pword== "123"){

    res.send("Login Successfull")
  }else{

    res.send("Login Fail");

  }

});

//fallback function

app.use((req,res)=>{

  res.write("No page Here");
  res.end();

});