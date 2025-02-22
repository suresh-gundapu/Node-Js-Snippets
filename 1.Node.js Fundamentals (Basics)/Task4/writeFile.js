var fs = require('fs');
fs.writeFile('sample.txt',"Hello","utf8",(err,data)=>{
if(err){
  console.log("something went wrong");
}
else{
  console.log("file written successfully");
}

})