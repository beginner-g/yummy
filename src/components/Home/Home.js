import React, { Component } from 'react'
import './home.css'
import img from './yummy.svg'
import {Link} from 'react-router-dom'
class Home extends Component {
  render(){
    return(
      <div className="home">
        <div className="yummy">
          <img className='logo' src={img} alt=""/>
        <h1 className='title-yummy'>吮指</h1>
          <p>享受舌尖艳遇</p>
        </div>
        <div className="active1">
          <Link className='signup' to='/signup'>注册</Link>
          <Link className='login' to='/login'>登录</Link>
        </div>
      </div>
    )
  }
}

export default Home
