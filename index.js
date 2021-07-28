var express = require('express')


var app = express()

app.get('/', function (req, res) {
  res.send('Okey boss Start koren')
})


app.listen(3000, () => console.log('Listening to port 3000'))