const express = require('express')
const app = express()
const port = 3000

app.get('/route-handler', function (req, res)  {
    //headers, body, params, query
    //do  more stuff
    res.json({
        name: "vishal gupta"
    })
  });

app.get('/', function (req, res)  {
  res.send('Hello World!')
});

app.listen(port, function ()  {
  console.log(`Example app listening on port ${port}`)
});