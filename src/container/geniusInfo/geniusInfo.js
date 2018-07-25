import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavBar, WingBlank, WhiteSpace, List, InputItem, TextareaItem, Button } from 'antd-mobile';

import Avator from "../../component/avator/avator";
import { save } from "../../reducers/user";

@connect(
  state => state.user,
  { save }
)

class GeniusInfo extends React.Component {
  constructor () {
    super ();
    this.state = {
      job: '',
      intro: ''
    }
    this.changeValue = this.changeValue.bind(this) 
    this.saveInfo = this.saveInfo.bind(this) 
  }

  changeValue (key, value) {
    this.setState ({
      [key]: value
    })
  }
  saveInfo () {
    this.props.save(this.state);
  }
  render () {
    let {changeValue, saveInfo} = this
    return (
      <div>
        <NavBar mode="dark">牛人完善信息页面</NavBar>
        {this.props.redirectTo ? <Redirect to = {this.props.redirectTo} /> : null}

        <WingBlank>
        <Avator avatorSelect={img => {
            this.setState({
              avator: img
            })
          }}/>
        <WhiteSpace />
        <List>
          <WhiteSpace />
          <InputItem onChange={(v) => changeValue ('job', v)}>求职职位：</InputItem>
          <WhiteSpace />
          <TextareaItem title="个人简介" autoHeight onChange={(v) => changeValue('intro', v)}></TextareaItem>
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <Button type="primary" onClick={saveInfo}>保存</Button>
        </WingBlank>
      </div>
    )
  }
}

export default GeniusInfo;