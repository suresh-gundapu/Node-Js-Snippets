let express = require("express");
//let logger = require("./Middlewares/logger");
let PORT = 7000;
let app = express();
//app.use(logger);
app.listen(PORT, () => {
  console.log("Server started at port number http://localhost:" + `${PORT}`);
});

module.exports = app;
