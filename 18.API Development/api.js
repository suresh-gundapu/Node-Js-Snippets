var express = require('express');

var app =  express();

app.listen(7070,()=>{
    console.log('server started at 7070 port');
});

app.get('/test',(req,res)=>{
    res.json({
        "status": true,
        "message": "Welcome to Landing page of application"
    });
});