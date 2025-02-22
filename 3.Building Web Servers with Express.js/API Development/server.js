var express = require('express');

var app = express();

app.listen(7070,()=>{
  console.log('server stareted at 7070 port');
});

exports.app1 = app;