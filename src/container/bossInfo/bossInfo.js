import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import {NavBar, List, InputItem, TextareaItem, WhiteSpace, Button, WingBlank} from 'antd-mobile';
import Avator from '../../component/avator/avator'
import { save } from '../../reducers/user'
@connect (
  state => state.user,
  { save }
)
class BossInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      company: '',
      money: '',
      job: '',
      avator: ''
    }
    this.change = this.change.bind(this)
    this.saveInfo = this.saveInfo.bind(this)
  }

  change(key, val) {
    this.setState({[key]: val})
  }

  saveInfo () {
    this.props.save(this.state);
  }

  // save() {
  //   this.props.save(this.state);
  //   console.log(this.state)
  // }

  render() {
    let {change, saveInfo} = this
    return (
    <div>
      {this.props.redirectTo ? <Redirect to = {this.props.redirectTo} /> : null}
      <NavBar mode="dark">BOSS完善信息页面</NavBar>
      <WhiteSpace/>
      <WingBlank>
        <Avator avatorSelect={img => {
          this.setState({
            avator: img
          })
        }}/>
        <WhiteSpace/>
        <WhiteSpace/>
        <List>
          <InputItem onChange={(v) => change('title', v)}>招聘职位</InputItem>
          <InputItem onChange={(v) => change('company', v)}>公司名称</InputItem>
          <InputItem onChange={(v) => change('money', v)}>职位薪资</InputItem>
          <TextareaItem
            title="职位要求"
            autoHeight
            onChange={(v) => change('job', v)}
          />
        </List>
        <WhiteSpace/>
        <WhiteSpace/>
        <Button type="primary" onClick={saveInfo}>保存</Button>
      </WingBlank>
    </div>)
  }
}

export default BossInfo;
