var mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/chat'
mongoose.connect(DB_URL)

const models = {
  user: {
    'name': {
      type: String,
      require: true
    },
    'password': {
      type: String,
      require: true
    },
    'type': {
      type: String,
      require: true
    },
    'avator': {
      'type': String
    },
    'desc': {
      'type': String
    },
    // 职位名
    'title': {
      'type': String
    },
    'company': {
      'type': String
    },
    'money': {
      'type': String
    }
  },
  chat: {

  }
}

for(let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
}
