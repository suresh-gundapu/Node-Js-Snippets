/*Global Objects in Node.js
mportant Global Objects
👉 Unlike browsers, Node.js has its own global objects:

Global Object	Description
__dirname	Path of the current directory
__filename	Full path of the current file
process	Information about the current Node.js process
console	Logging utility **/

console.log("curentdirectory" + __dirname);
console.log("current file" + __filename);
console.log("current process" + process.platform);
