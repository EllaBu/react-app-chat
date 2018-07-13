// 合并所有的reducer 并且返回


import { counter } from '../redux/index'

import { auth } from './auth'

const rootReducer = {
  counter,
  auth
}

export default rootReducer