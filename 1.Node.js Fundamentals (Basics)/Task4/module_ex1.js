let a = 2;

let name = "suresh";

let func1 = function(){

  console.log("hi");
}
let obj = {
  name:"suresh",
  func :function(){
    return this.name;

  }
}

exports.number = a;

exports.name1 = name;

exports.function_name = func1;

exports.obj = {
  obj
}