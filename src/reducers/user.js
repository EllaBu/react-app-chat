import axios from 'axios'
import { redirectPath } from '../config/util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
  isAuth: false,
  msg: '',
  name: '',
  password: '',
  rePassword: '',
  redirectTo: ''
}

export function user(state=initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return{ ...state, msg: '', redirectTo: redirectPath(action.payload), isAuth: true, ...action.payload }
    case LOGIN_SUCCESS:
      return{ ...state, msg: '', redirectTo: redirectPath(action.payload), isAuth: true, ...action.payload }
    case ERROR_MSG:
      return{ ...state, isAuth: false, msg: action.msg }
    case LOAD_DATA:
      return { ...state, ...action.payload}
    default:
      return state
  }
}
function loginSuccess (data) {
  return { type: LOGIN_SUCCESS, payload: data}
}
function registerSuccess (data) {
  return { type: REGISTER_SUCCESS, payload: data}
}
function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

export function loadData (userinfo) {
  return { type: LOAD_DATA, payload: userinfo}
}

export function login({name, password}){
  if (!name || !password) {
    return errorMsg('用户名密码不能为空')
  }
  return dispatch => {
    axios.post('/user/login', { name, password }).then(res => {
      console.log(res)
      if (res.status === 200 && res.data.code === 0){
        dispatch(loginSuccess (res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function register({name, password, rePassword, type}) {
  if (!name || !password || !type) {
    return errorMsg ('用户名密码不能为空')
  }
  if (password !== rePassword) {
    return errorMsg ('密码和确认密码不一致')
  }
  return dispatch => {
    axios.post('/user/register', { name, password, type }).then(res=>{
      console.log(res)
      if (res.status === 200 && res.data.code ===0 ){
        dispatch(registerSuccess({name, password, type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
