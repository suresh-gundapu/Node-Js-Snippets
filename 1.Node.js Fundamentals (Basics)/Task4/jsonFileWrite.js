var fs = require('fs');

var users =[{"id":1,"name":"Alice","email":"alice@example.com","age":30,"info":"{\"address\":\"Elm Street\",\"phone\":12312241234}"},{"id":2,"name":"Bob","email":"bob@example.com","age":40},{"id":3,"name":"Charlie","email":"charlie@example.com","age":25},{"id":4,"name":"David","email":"david@example.com","age":35},{"id":5,"name":"Eva","email":"eva@example.com","age":29}]
var data = JSON.stringify(users);

fs.writeFile("data1.json",data,(err,data)=>{
  if(err){
    console.log('error occured');
  }else{
    console.log('file written successfully')
  }
})