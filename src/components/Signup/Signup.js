import React, { Component } from 'react'
import './signup.css'
import Menu from '../Menu/Menu'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../redux/store'
class Signup extends Component {
  state={
    val:'',
    email: ''
  }
  changeUser=(e)=>{
    this.setState({
      val:e.target.value
    })
  }
  changeEmail=(e)=>{
    this.setState({
      email:e.targrt.value
    })
  }
  // onhandleSignup=(e)=>{
  //   const {signval}=this.state
  //   const sign=store.dispatch({type:'ADD_USER',signval})
  //   console.log(sign);
  //   // axios.post('http://localhost:3008/signup',signup).then(
  //   //   res=>{
  //   //     signup:res.data
  //   //   }
  //   // )
  // }
  render(){
    return(
      <div className="sign">
        <Menu/>
        <div className="signup-header">
          <p>注册</p>
        </div>
        <div className="signup-title">
          <h1>注册</h1>
          <p>连接小而确定的幸福</p>
        </div>
        <div className="signup-form">
          <div className="signup-input">
            <input className='uesrname' type="text" placeholder='用户名' onChange={this.changeUser} value={this.state.val}/>
          <input className='email' type="text" placeholder='Email' onChange={this.changeEmail} value={this.state.email}/>
            <input className='password' type="password" placeholder='password'/>
          <input className='true' type="password" placeholder='再输一遍'/>
          </div>
          <div className="signup-button">
            <Link onClick={this.onhandleSignup} className='signup-submit' to='/profile'>注册</Link>
          </div>
        </div>
        <div className="signup-other">
          <Link to='/login'>已有账号？直接登录</Link>
        </div>
      </div>
    )
  }
}

export default Signup
