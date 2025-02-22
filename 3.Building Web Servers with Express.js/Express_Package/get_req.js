var express = require('express');

var app = express();

app.listen(7070,()=>{
console.log('server startted');
});

app.get("/",(req,res)=>{

  res.sendFile(__dirname + "/login.html");

});

app.get("/login",(req,res)=>{

  if(req.query.uname == "admin" && req.query.pword== "123"){

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