let app = require("./server");
let logger = require("./Middlewares/logger");

app.use(logger);
//Now every request will be logged in the console! 🎉

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});
