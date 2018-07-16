import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'antd-mobile'

import { addGun, reduceGun, addGunAsync} from "./index";
@connect(
  state => ({num: state.counter}),
  { addGun, reduceGun, addGunAsync }
)

class ReduxPage extends React.Component{

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.num}</p>
        <Button type="primary" onClick={this.props.addGun}>增加</Button>
        <br/>
        <Button onClick={this.props.reduceGun}>减少</Button>
        <br/>
        <Button onClick={this.props.addGunAsync}>延迟添加</Button>
      </div>
    )
  }
}
export default ReduxPage;