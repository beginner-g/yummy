import React, { Component } from 'react'
import './login.css'
import list from './list.svg'
import {Link} from 'react-router-dom'
class Login extends Component {
  render(){
    return(
      <div className="login-home">
        <div className="login-header">
          <img src={list} alt=""/>
          <p>登录</p>
        </div>
        <div className="login-title">
          <h1>登录</h1>
          <p>连接小而确定的幸福</p>
        </div>
        <div className="login-form">
          <div className="input">
            <input className='uesrname' type="text" placeholder='用户名'/>
            <input className='password' type="password" placeholder='password'/>
          </div>
          <div className="login-button">
            <button className='submit'>登录</button>
          </div>
        </div>
        <div className="other">
          <Link to='/signup'>没有账号？请先注册</Link>
        </div>
      </div>
    )
  }
}

export default Login
