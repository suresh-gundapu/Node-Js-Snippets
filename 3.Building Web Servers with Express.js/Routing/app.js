var express = require('express');
var app = express();
var path = require('path');
app.listen(7071,()=>{
  console.log("server statred with port number 7071");
});
app.get("/",(req,res)=>{
  res.sendFile("home.html",{
    root:path.join(__dirname,"./views")
  });

});
app.get("/about.html",(req,res)=>{
  res.sendFile("about.html",{
    root:path.join(__dirname,"./views")
  });
});
app.get("/contact.html",(req,res)=>{

  res.sendFile("contact.html",{
    root:path.join(__dirname,"./views")
  });
});

var router = express.Router();
app.use('/admin',router);
router.get("/dashboard.html",(req,res)=>{
  res.sendFile("dashboard.html",{
    root:path.join(__dirname,"./views/admin")
  });
});


//fallback function

app.use((req,res)=>{

  res.write("No page Here");
  res.end();

});