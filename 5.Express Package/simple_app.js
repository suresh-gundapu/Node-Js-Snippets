/**
 * 
 * Express frame work:
 * 
 * -> supports mvc   
 * -> Handle many request 
 * -> Handle get and post request very easily
 * -> pass js object into HTML file
 */

var express = require('express');

var app = express();


app.listen(7070,()=>{
  console.log('Server started with port number 7070');
});

app.get("/",(req,res)=>{

  res.write('Welcome to express');
  res.end();

})
