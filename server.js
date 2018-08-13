const express = require('express')  
const opn = require('opn')
var mongoose = require('mongoose');
var config = require('./config');
const app = express()  
const port = 5000
var apiController = require('./controllers/apiController');
function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}


app.set('view engine', 'ejs');
app.use(allowCrossDomain)
app.use('/', express.static(__dirname + '/public'))

mongoose.connect(config.getDBConnectionString());
apiController(app);

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
  opn('http://localhost:5000')
})