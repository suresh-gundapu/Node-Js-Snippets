/*this is first sample program in node js 
1️⃣ Node.js is NOT a Browser Language
✅ JavaScript usually runs inside the browser (Chrome, Firefox).
✅ But in Node.js, the execution happens in a server environment.
✅ We do NOT have window, document, or alert() in Node.js!
✅ We use Node.js modules like http, fs, os, etc.
✅ In a browser, console.log() prints in the console.
✅ In Node.js, console.log() prints in the terminal (command prompt).

2️⃣ Node.js is a Server-Side Language
✅ Node.js is used to create server-side applications.
✅ It is NOT used to create client-side applications.
✅ Node.js is used to create web servers, APIs, etc.
✅ Node.js can read, write, delete, and update files on the server.
✅ Node.js can collect form data, cookies, and session data.
✅ Node.js can add, delete, modify data in the database.
✅ Node.js can send and receive data to/from the server.
 */

var a = 10;
let b = 20;

const obj = {
  name: "suresh",
  func1: function () {
    return "hello";
  },
};

console.log(b);
console.log(obj);
console.log(obj.func1);

/**  You can see ouptput in terminal just enter node your_program_name */
