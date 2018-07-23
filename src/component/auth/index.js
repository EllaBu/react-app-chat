import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../reducers/user'

@withRouter
@connect(
  null,
  { loadData }
)

class Auth extends React.Component{
  componentDidMount () {
    console.log('props----------')
    console.log(this.props)
    console.log('props----------')
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    // 获取用户信息
    axios.get('/user/info').then(res => {
      console.log(res.data)
      if (res.status == 200) {
        if (res.data.code === 0) {
          // 有登录信息
          this.props.loadData(res.data.data)
        }else {
          // this.props.history.push('/login')
        }
      }
    })
  }
  render () {
    return null;
  }
}

export default Auth;
