const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const fs = require('fs')

const fileOutputDestination = 'app.log'

var app = express()

// Initialize urlencoded/json() separably.
// http://qiita.com/ktanaka117/items/596febd96a63ae1431f8
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.post('/', function (req, res) {
  var timeString = moment().format('YYYY/MM/DD HH:mm:ss.SSS')
  console.log(timeString + ' Received.')

  fs.appendFileSync(fileOutputDestination,
    timeString + '\n'
      + JSON.stringify(req.headers) + '\n'
      + JSON.stringify(req.body) + '\n'
      + '\n'
  ).catch(err => {
    console.error(err)
    res.status(500).send('500 Internal Server Error')
  })

  res.send('200 OK')
})

app.listen(3000)
console.log('Ready.')
