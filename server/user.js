const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

const _filter = {'password': 0, '__v': 0}

Router.get('/info', function (req, res) {
  // 校验用户有没有cookie
  const { userid } = req.cookies
  if (!userid){
    return res.json({code: 1})
  }
  User.findOne({_id: userid}, _filter, function(err, doc) {
    if (err) {
      return res.json({
        code: 1,
        msg: '后端出错'
      })
    }
    if ( doc ) {
      return res.json({
        code: 0,
        data: doc
      })
    }
  })
})

Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.post('/save', function (req, res) {
  const userid = req.cookies.userid;
  if (!userid) {
    return json.dumps({code: 1});
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, function(err, doc){
    const data = Object.assign({}, {
      name: doc.name,
      type: doc.type
    }, body)
    return res.json({code: 0, data})
  })
})

Router.post('/login', function(req, res) {
  console.log(req.body)
  const { name, password } =req.body
  User.findOne({ name, password: utils.md5(password) }, _filter, function(err, doc) {
    if (doc) {
      res.cookie('userid', doc._id) // 保存用户登录信息
      return res.json({
        code: 0,
        data: doc
      })
    } else {
      return res.json({
        code: 1,
        msg: '用户名密码错误'
      })
    }
  })
})

Router.post('/register', function(req, res) {
  console.log(req.body)
  const { name, password, type} = req.body
  User.findOne({name: name}, function(err, doc) {
    if (doc) {
      return res.json({
        code: 1,
        msg: '用户名已经存在'
      })
    }
    const userModel = new User({name, password:utils.md5(password), type})
    userModel.save(function(err, doc){
      if( err ){
        return res.json({
          code: 1,
          msg: '后端出错'
        })
      }
      const {name, type, _id} = doc
      res.cookie('userid', doc._id)
      return res.json({code: 0})
    })
  })
})

module.exports = Router
