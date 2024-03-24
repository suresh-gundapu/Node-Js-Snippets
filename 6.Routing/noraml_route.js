var express = require('express');

var app = express();

app.listen(7071,()=>{
  console.log("server statred with port number 7071");
});

app.get("/",(req,res)=>{

  res.sendFile(__dirname + "/home.html");

});
app.get("/about.html",(req,res)=>{

  res.sendFile(__dirname + "/about.html");

});
app.get("/contact.html",(req,res)=>{

  res.sendFile(__dirname + "/contact.html");

});

var router = express.Router();
app.use('/admin',router);

router.get("/dashboard.html",(req,res)=>{

  res.sendFile(__dirname + "/dashboard.html");

});


//fallback function

app.use((req,res)=>{

  res.write("No page Here");
  res.end();

});