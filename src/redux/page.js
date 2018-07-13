import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'antd-mobile'

import { addGun, reduceGun, addGunAsync} from "./index";
import axios from 'axios'
@connect(
  state => ({num: state.counter}),
  { addGun, reduceGun, addGunAsync }
)

class ReduxPage extends React.Component{
  componentDidMount () {
    axios.get('/data').then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div>
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