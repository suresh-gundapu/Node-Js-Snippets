var app = require('./server');

app.app1.get('/',(req,res)=>{

  res.send('Welcome to API this is GET request');

});
app.app1.post('/insert',(req,res)=>{

  res.send('Welcome to API this is post request');

});
app.app1.put('/update',(req,res)=>{

  res.send('Welcome to API this is put request');

});
app.app1.delete('/delete',(req,res)=>{

  res.send('Welcome to API this is delete request');

});