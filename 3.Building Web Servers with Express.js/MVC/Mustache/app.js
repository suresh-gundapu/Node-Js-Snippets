var express = require('express');

var app = express();
const path = require('path')

app.listen(7070,()=>{
  console.log("Server started");
});

var mustacheexpress = require('mustache-express');

app.engine('mustache',mustacheexpress());

app.set('view engine' ,"mustache");
app.set('views', path.join(__dirname, '/views'))


app.get('/',(req,res)=>{

  var model = {name:"suresh",marks:25,student:[{subjectName:"maths",marks:100},{subjectName:"english",marks:200}]}
  res.render('index',model);

});