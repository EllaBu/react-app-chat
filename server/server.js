var express = require('express')
var mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('数据库连接成功')
})

const User = mongoose.model('user', new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))



var app = express();

app.get('/', function (req, res) {
  res.send('<h1>hello</h1>')
})
app.get('/data', function (req, res) {
  User.find({name: 'Leo'}, function (err, doc) {
    res.json(doc)
  })
})

app.listen(9999, function () {
  console.log('Node app start!')
})