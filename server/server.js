var express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user');

var app = express();
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9099, function () {
  console.log('Node app start!')
})
