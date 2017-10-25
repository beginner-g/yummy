import React, { Component } from 'react'
import './signup.css'
import Menu from '../Menu/Menu'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from "../../redux/store"
import { message } from 'antd';
class Signup extends Component {
  state={
    username:'',
    email: '',
    password:'',
    passTrue:''
  }
  changeUser=(e)=>{
    this.setState({
      username:e.target.value
    })
  }
  changeEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  changePass=(e)=>{
    this.setState({
      password:e.target.value
    })
  }
  changeTrue=(e)=>{
    this.setState({
      passTrue:e.target.value
    })
  }
  onhandleSignup=(e)=>{
    const data={
      username:this.state.username,
      email:this.state.email,
      password:this.state.password,
      passTrue:this.state.passTrue
    }
    e.preventDefault()
    if(this.state.username.trim()
       &&this.state.email.trim()
       &&this.state.password.trim()
       &&this.state.passTrue.trim()){
      if(data.passTrue!==data.password){
        return message.error('密码不一致，请重新确认');
        if(store.getState().data.find(t=>t.username==data.username))
            return message.error('用户名已被注册');
      }else{
        axios.post('http://localhost:3008/signup',data).then(
          res=>{
              const data=res.data
              store.dispatch({type:'SIGNDATA',data})
          }
        )
        console.log(store.getState());
        window.localStorage.setItem('userId', '23432ddds2')
        this.props.history.push('/login')
      }
    }else{
      message.error('请填写全部信息');
    }
  }
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
            <input className='uesrname' type="text" placeholder='用户名' onChange={this.changeUser} value={this.state.username}/>
            <input className='email' type="text" placeholder='Email' onChange={this.changeEmail} value={this.state.email}/>
            <input className='password' type="password" placeholder='password' onChange={this.changePass}/>
            <input className='true' type="password" placeholder='再输一遍' onChange={this.changeTrue}/>
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
