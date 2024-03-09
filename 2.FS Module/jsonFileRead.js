var fs=require('fs');

fs.readFile('data.json',"utf8",(err,data)=>{
  if(err){
    console.log('error occured');
  }else{
    let dataJson = JSON.parse(data);
    console.log(dataJson);
  }
})