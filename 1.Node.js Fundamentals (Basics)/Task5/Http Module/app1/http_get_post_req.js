/**
 * Query string is used to convert or parse the query stering parameters into JS object 
 */


var http = require('http');
var fs = require('fs');
var qs = require('querystring');

var server = http.createServer(getLoginPage);

function  getLoginPage(req,res) {

  if(req.url == "/"){

    fs.readFile("login.html", "utf8",(err,data)=>{
      if(err){
        res.writeHead(500);
        res.write('Unbale to read file');

      }
      else{

        res.setHeader("content-type","text/html");
        res.write(data)
      }
      res.end();


    });
  }
  // }else if(req.url.startsWith('/login') && req.method=="GET"){

    

  //   // var uname = qs.parse(req.url.split("?")[1]).uname;
  //   // var pword = qs.parse(req.url.split("?")[1]).pword;

  //   // if(uname == "admin" && pword == "123456"){
  //   //   res.write('login successfull');

  //   // }else{
  //   //   res.write('login failure');

  //   // }
  //   // res.end();
  // }
  else if(req.url == "/login" && req.method=="POST"){

    req.on("data",(query)=>{

     // console.log(query.toString());
     var q = query.toString();
      var uname = qs.parse(q).uname;
     var pword = qs.parse(q).pword;
     console.log(uname);
     console.log(pword);
    if(uname == "admin" && pword == "123456"){
      res.write('login successfull');

    }else{
      res.write('login failure');
    }
    res.end();
    });
  }
  
  else{
    res.writeHead(500);
    res.write('Unbale to read Login page');
    res.end();

  }
}
server.listen(7071,()=>{
  console.log('server started with port number 7071')

});