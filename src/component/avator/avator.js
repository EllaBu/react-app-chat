import React from 'react';
import { Grid, List } from 'antd-mobile';
export default class Avator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    var avatorList = ['00', '01', '02', '03', '04', '05', '06', '07']
    const data = avatorList.map((i) => ({
      icon: require(`./img/${i}.png`),
      text: `${i}`,
    }));
    const avatorHeader = this.state.icon ? (<div>您选择的头像为：<img src={this.state.icon} style={{height: 20}} /></div>) : '请选择头像'
    return (
      <List renderHeader={()=>avatorHeader}>
        <Grid
          data={data}
          columnNum={4}
          onClick = {el => {
            this.setState (el)
            this.props.avatorSelect(el.text)
          }}
         />
      </List>
    )
  }
}
