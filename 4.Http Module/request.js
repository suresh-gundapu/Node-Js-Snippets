/**
 * 1)request.url:
 * it represents the URL of current request
 * 2)request.method:
 * it represents the method or type of current request get or post
 * 3)request.headers:
 *represent request headers that are sent from browser server
 * 
 * 
 * 
 * 
 * 
 */

 var http = require('http');

 var server  = http.createServer((req,res)=>{
 
   console.log('request recieved');
 res.setHeader('Content-type','text/html');
 res.writeHead(200);
 res.write('<h1>Hello welcome to nodejs world</h1>');
 res.write('<br>the request URL is ' + req.url);
 res.write('<br>the request Method is ' + req.method);
 res.write('<br>the request Method is ' + req.headers["accept-encoding"]);
 res.end();
 
 });
 
 server.listen(7071,()=>{
 console.log('server started');
 });