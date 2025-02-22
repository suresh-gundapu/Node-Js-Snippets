/**Request Object In express:
 * -----------* -------------
 * 
 * 1)request.url:URL of current request
 * 2)request.method:GET|POST
 * 3)request.headers:sending from browser to server
 * 4)request.query:read query string params in form of object GET requet {username:suresh,password:abc}
 * 5)request.body:read query string params in form of object POST requet {username:suresh,password:abc}
 * 
 * Response Object In express:
 * ---------------------------
 * 
 * 1)reponse.write():used to send string values to browser
 * 2)response.end():Ends the response
 * 3)reponse.status():set status code
 * 4)response.header():sending response headers form server to browser
 * 5)response.send():used send string/object to browser
 * 6)reponse.sendFile():used to read content of file and send same as response to browser
 * 
 */

var express = require("express");

var app = express();

app.listen(7070,()=>{
  console.log("server started with port number 7070");
});

app.get('/',(req,res)=>{
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.body);
 // res.send('Hello');
 res.header("content-type","text/html");
  res.sendFile(__dirname + "/login.html");
  console.log("more code here");
//  res.end();

})

