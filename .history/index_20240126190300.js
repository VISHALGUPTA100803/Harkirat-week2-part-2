const express = require('express')
const app = express()
const port = 3000

app.get('/route-handler', function (req, res)  {
    //headers, body, params, query
    //do  more stuff
    res.json({
        name: "vishal gupta",
        age: 21,
    })
  });

app.get('/', function (req, res)  {
  res.send('Hello World!')
});

app.post('/request-handler', function (req, res)  {
   // console.log(req.headers)
   console.log()
    res.send({
        msg: "2 + 2 = 4"
    })
  });

app.listen(port, function ()  {
  console.log(`Example app listening on port ${port}`)
});