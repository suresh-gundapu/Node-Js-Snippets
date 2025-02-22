let express = require("express");
let PORT = 7000;
let app = express();
//middleware to Prase JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 22 },
  { id: 3, name: "Sam", age: 23 },
  { id: 4, name: "Tom", age: 27 },
  { id: 5, name: "Jerry", age: 21 },
];

app.listen(PORT, () => {
  console.log("Server started at port number http://localhost:" + `${PORT}`);
});

//get users API
app.get("/users", (req, res) => {
  res.json({
    status: 1,
    data: users,
  });
});

//add user API

app.post("/addUser", (req, res) => {
  const { name, age } = req.body;
  const id = users.length + 1;
  users.push({ id, name, age });
  res.json({
    status: 1,
    message: "User added successfully",
  });
});

//get user by ID API

app.get("/getUserID/:id", (req, res) => {
  const id = req.params.id;

  const userData = users.find((u) => {
    return u.id === parseInt(id);
  });
  if (!userData) {
    return res.json({
      status: 0,
      message: "User not found",
    });
  }
  res.json({
    status: 1,
    data: userData,
  });
});
//Update user API

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  console.log(req.body);
  console.log(id);

  const user = users.find((u) => {
    return u.id === parseInt(id);
  });
  if (user) {
    user.name = name;
    user.age = age;
  }
  if (!user) {
    return res.json({
      status: 0,
      message: "User not found",
    });
  }
  console.log(users);

  res.json({
    status: 1,
    message: "User updated successfully",
  });
});

//Delete user API
app.delete("/deleteuser/:id", (req, res) => {
  let id = req.params.id;

  const updateUsers = users.filter((u) => {
    return u.id !== parseInt(id);
  });
  res.json({
    status: 1,
    message: "User deleted successfully",
    usersUpdate: updateUsers,
  });
});

app.use((req, res) => {
  res.json({
    status: 0,
    message: "No page serve",
  });
});
