/*👉 Use path module to work with directories and file paths.

*/
const path = require("path");

console.log("File Name:", path.basename(__filename));
console.log("Directory Name:", path.dirname(__filename));
console.log("File Extension:", path.extname(__filename));
console.log("Parsed Path Object:", path.parse(__filename));
/** OS Module – Get System Information
 */
const os = require("os");

console.log("OS Type:", os.type());
console.log("Total Memory:", os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log("Free Memory:", os.freemem() / 1024 / 1024 / 1024, "GB");
console.log("CPU Details:", os.cpus());

/**Understanding Event Loop & Callbacks
👉 Event Loop is the mechanism that handles asynchronous operations in Node.js.

🔹 Example: Callback Execution in Event Loop */
console.log("Step 1");

setTimeout(() => {
  console.log("Step 2 (Asynchronous)");
}, 2000);

console.log("Step 3");
// Output:👉 Why? Because setTimeout is non-blocking and runs after other synchronous code finishes execution.

//👉 Event Loop is the mechanism that handles asynchronous operations in Node.js.
//👉 It allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is
//  single-threaded.
//👉 The Event Loop is a loop that checks the Call Stack and Callback Queue.
// If the Call Stack is empty,
//  it will take the first event from the Callback Queue and push it to the Call Stack.
//👉 This is how Node.js handles asynchronous operations and callbacks.
//👉 The Event Loop is the secret behind Node.js's non-blocking I/O operations.
