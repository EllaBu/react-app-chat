import React from 'react'

import { Redirect } from 'react-router-dom'

import { List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'

import { connect } from 'react-redux'

import { login } from "../../reducers/user";

import Logo from '../../component/logo'

@connect (
  state => state.user,
  { login }
)

class Index extends React.Component{
  constructor(props){
   super(props);
   this.state = {
     name: '',
     password: ''
   }
   this.login = this.login.bind(this)
   this.register = this.register.bind(this)
   this.changeValue = this.changeValue.bind(this)
  }
  register () {
    this.props.history.push('/register')
  }
  changeValue (key, value) {
    this.setState ({
      [key]: value
    })
  }
  login () {
    console.log(this.state)
    this.props.login(this.state);
  }
  render () {
    const RadioItem = Radio.RadioItem
    const { login, register, changeValue } = this
    return (
      <div>
        {this.props.redirectTo ? <Redirect to = {this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={v => changeValue('name', v)}>用户名</InputItem>
            <InputItem onChange={v => changeValue('password', v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={login}>登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Index;
