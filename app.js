const express = require('express')
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World Node Js')
})

app.listen(3000)
console.log("App listening in port 3000")