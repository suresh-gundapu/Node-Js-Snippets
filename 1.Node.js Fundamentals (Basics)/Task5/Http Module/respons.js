/**Responce Object:
 * ----------------
 * 
 * 1)responce.write:
 * 
 * it is used to send some data to browser
 * 
 * 2)response.end:
 * it must be used , specify to the browser the response has completed 
 * 
 * 3)response.setHeader()
 * 
 * it is used to send HTTP headers to the browser
 * 
 * 4)response.writeHead():
 * 
 * it is used to set http status code 
 * 
 * 
 */


var http = require('http');

var server  = http.createServer((req,res)=>{

  console.log('request recieved');
res.setHeader('Content-type','text/html');
res.writeHead(200);
res.write('<h1>Hello welcome to nodejs world</h1>');
res.end();

});

server.listen(7071,()=>{
console.log('server started');
});
