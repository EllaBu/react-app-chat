import React from 'react'
import logoImg from './logo.png'
import './logo.css'
class Logo extends React.Component{
  render () {
    return (
      <div className="logo">
        <img src={logoImg} alt=""/>
      </div>
    )
  }
}

export default Logo;