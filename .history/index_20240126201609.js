const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT  || 3000; 
// environment variable - 

app.use(bodyParser.json());

app.get("/route-handler", function (req, res) {
  //headers, body, params, query
  //do  more stuff
  res.json({
    name: "vishal gupta",
    age: 21,
  });
});

app.get("/", function (req, res) {
  console.log(req.body);
  res.send("Hello World!");
});

app.post("/request-handler", function (req, res) {
//   console.log(req.headers);
//   console.log(req.body);
console

  res.send({
    msg: "2 + 2 = 4",
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
