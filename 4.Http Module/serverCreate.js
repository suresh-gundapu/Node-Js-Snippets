var http = require('http');


var server = http.createServer((req,res)=>{
console.log('server created');
res.write('hello world');
res.end();
}); 

server.listen((7071),()=>{
console.log('server started');
});

  