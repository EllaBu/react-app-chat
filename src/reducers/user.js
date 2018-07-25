import axios from 'axios'
import { redirectPath } from '../config/util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
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
    case AUTH_SUCCESS:
      return{ ...state, msg: '', redirectTo: redirectPath(action.payload), isAuth: true, ...action.payload }
    case ERROR_MSG:
      return{ ...state, isAuth: false, msg: action.msg }
    case LOAD_DATA:
      return { ...state, ...action.payload}
    default:
      return state
  }
}

function authSuccess (data) {
  return { type: AUTH_SUCCESS, payload: data}
}
function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

export function loadData (userInfo) {
  return { type: LOAD_DATA, payload: userInfo}
}

export function save(data) {
  console.log(data)
  return dispatch => {
    axios.post('/user/save', data).then(res => {
      if (res.status === 200 && res.data.code === 0){
        dispatch(authSuccess (res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function login({name, password}){
  if (!name || !password) {
    return errorMsg('用户名密码不能为空')
  }
  return dispatch => {
    axios.post('/user/login', { name, password }).then(res => {
      console.log(res)
      if (res.status === 200 && res.data.code === 0){
        dispatch(authSuccess (res.data.data))
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
        dispatch(authSuccess({name, password, type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
