/**
 * fs module: retrieve content from file
 *
 * http module: recieving request from browser and process and sending request
 *
 * Browser -> Http request->http module->fs module-> file-> file content is reading-> send file content as responce to browser using http module -> browser display it
 *
 *
 *
 */

var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("request recieved");
  var filename;
  if (req.url == "/home")
   filename = "index.html";
  else if (req.url == "/about")
   filename = "about.html";
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.write("unable to read file");
    } else {
      res.setHeader("content-type", "text/html");
      res.write(data);
    }
    res.end();
  });
});

server.listen(7070, () => {
  console.log("Server starts with port number 7070");
});