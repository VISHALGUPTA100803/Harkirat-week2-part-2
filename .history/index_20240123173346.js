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

app.post('/requ')

app.listen(port, function ()  {
  console.log(`Example app listening on port ${port}`)
});