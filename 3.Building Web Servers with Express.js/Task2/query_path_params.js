/**
 * Query params vs Path Params :
 * =============================
 *
 * Query params means we are sending some values in url after quetion mark
 *
 * localhost:7070/?id=4&uname=add
 *
 * how to collect query params :
 *
 * in request object we can collect the query parameters
 *
 * request={
 * djh:{},
 * query:{
 *      id:2,uname:"suresh"
 *        }
 * }
 *
 * Path params means we are sending any values in url after slash dynamically
 *
 * localhost:7070/hyderabad
 *
 * how to collect query params :
 *
 * in request object we can collect the query parameters
 *
 * request={
 * djh:{},
 * params:{
 * id=1
 * }
 * query:{
 *      id:2,uname:"suresh"
 *        }
 * }
 *
 */

var app = require("../API Development/server");
// query paams example localhost:7070/?id=1
app.app1.get("/", (req, res) => {
  if (req.query.id) {
    res.send(`Your id is ${req.query.id}`);
  } else {
    res.send("Hello");
  }
});

// path or root  params example localhost:7070/para/hyerabad
app.app1.get("/para/:city", (req, res) => {
  res.send(`Your city is ${req.params.city}`);
});
