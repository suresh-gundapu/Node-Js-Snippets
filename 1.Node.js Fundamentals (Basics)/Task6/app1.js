let http = require("http");

let server = http.createServer((req, res) => {
  console.log("server created");

  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>welcome nod js with http module5</h1>");
  } else if (req.url == "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home page</h1>");
  } else {
    res.write("No page Serve");
  }
  res.end();
});

server.listen(7000, () => {
  console.log("server started with port number 7000");
});
