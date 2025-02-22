/**
 * Understanding Blocking vs Non-Blocking (Asynchronous Execution):
 * -------------------------------------------------------------
🔹 Blocking Code (Synchronous)
👉 Code executes line by line and waits for one operation to finish before moving to the next.
 */

const fs = require("fs");

// //write file data
// fs.writeFile("input.txt", "this is sample text file ", "utf8", (err, data) => {
//   if (err) {
//     console.log("error occured");
//   } else {
//     console.log("file created");
//   }
// });

// Blocking Code
const data = fs.readFileSync("input.txt", "utf8");
console.log(data);
console.log("Program Ended");

/**
 * Output:
 * -------
 * This is a sample text file
 * Program Ended
 */

/** Non-Blocking Code (Asynchronous)
 * 👉 Uses callbacks or Promises to avoid blocking.
 * 👉 Does not wait for one operation to finish before moving to the next.
 */

fs.readFile("input.txt", "utf8", (err, data) => {
  console.log(data);
});
console.log("Program Ended");

/**
 * Output:
 * -------
 * Program Ended
 * This is a sample text file
 */
