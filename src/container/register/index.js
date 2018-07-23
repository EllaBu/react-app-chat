import React from 'react'
import { Toast } from 'antd-mobile'

import { Redirect } from 'react-router-dom'

import { List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'

import Logo from '../../component/logo'
import { register } from "../../reducers/user";
import {connect} from "react-redux";
@connect(
  state => state.user,
  { register }
)
class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'genius',
      name: '',
      password: '',
      rePassword: ''
    }
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }
  login () {
    this.props.history.push('/login')
  }
  changeValue (key, value) {
    this.setState({
      [key]: value
    })
  }
  register () {
    this.props.register(this.state);
    // console.log('-----------'+this.props.msg)
    // if (this.props.msg) {
    //   Toast.fail(this.props.msg, 6);
    // }
    // console.log(this.state)
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to = {this.props.redirectTo} /> : null}
        <Logo />
        <p>{ this.props.msg }</p>
        <WingBlank>
          <List>
            <InputItem
              onChange={v=>this.changeValue('name', v)}
            >用户名</InputItem>
            <InputItem
              type="password"
              onChange={v=>this.changeValue('password', v)}
            >密码</InputItem>
            <InputItem
              type="password"
              onChange={v=>this.changeValue('rePassword', v)}
            >确认密码</InputItem>
            <WhiteSpace />
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === 'genius'}
              onChange={()=>this.changeValue('type', 'genius')}
            >牛人</RadioItem>
            <RadioItem
              checked={this.state.type === 'boss'}
              onChange={()=>this.changeValue('type', 'boss')}
            >BOSS</RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.login}>登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Index;
