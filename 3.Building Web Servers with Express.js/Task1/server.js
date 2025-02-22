let express = require("express");
let app = express();
let PORT = 7000;
// Middleware to parse JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express.js</h1>");
});

//sample API
app.get("/testAPI", (req, res) => {
  res.json({
    status: 1,
    message: "API is working fine",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.send("No page Serve");
});
