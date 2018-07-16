import React from 'react'
import { connect } from 'react-redux'
import { login, logout, getUserData } from "../reducers/auth";
// import axios from "axios/index";

@connect(
  state => state.auth,
  { login, logout, getUserData}
)
class PageTwo extends React.Component{

  // constructor() {
  //   super();
  //   this.state = {
  //     data: {}
  //   }
  // }
  componentDidMount () {
    this.props.getUserData();
    // axios.get('/data').then(res=>{
    //   console.log(res.data)
    //   if(res.status === 200) {
    //     this.setState({
    //       data: res.data
    //     })
    //   }
    // })
  }
  render () {
    return (
      <div>
        <h2>My name is {this.props.name}, I'm {this.props.age} years old!</h2>
      </div>
    )
  }
}

export default PageTwo;