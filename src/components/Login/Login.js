import React, { Component } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import Menu from '../Menu/Menu'
import { message } from 'antd';
import axios from 'axios'
import store from "../../redux/store"

class Login extends Component {
  state={
    username:'',
    password:''
  }
  changeUser=(e)=>{
    this.setState({
      username:e.target.value
    })
  }
  changePass=(e)=>{
    this.setState({
      password:e.target.value
    })
  }
  login=(e)=>{
    e.preventDefault()
    const data={
      username:this.state.username,
      password:this.state.password
    }
    if(this.state.username === ''){
      return message.error('用户名不能为空')
    }
      axios.get('http://localhost:3008/signup').then(
        res=>{
          const news=res.data.filter(t=>t.username===data.username&&t.password===data.password)
          console.log(res.data.filter(t=>t.username===data.username&&t.password===data.password));
          if(news==false){
            return message.error('用户名或密码不正确')
          }else{
            axios.post('http://localhost:3008/login',data).then(
              res=>{
                const data =res.data
                store.dispatch({type:'LOGIN',data})
              }
            )
            console.log(store.getState().loginform);
            localStorage.setItem('userId', '23432ddds2')
            this.props.history.push('/news')
          }
        }
      )
  }
  render(){
    return(
      <div className="login-home">
        <Menu/>
        <div className="login-header">
          <p>登录</p>
        </div>
        <div className="login-title">
          <h1>登录</h1>
          <p>连接小而确定的幸福</p>
        </div>
        <div className="login-form">
          <div className="input">
            <input onChange={this.changeUser} value={this.state.username} className='uesrname' type="text" placeholder='用户名'/>
          <input onChange={this.changePass} value={this.state.password} className='password' type="password" placeholder='password'/>
          </div>
          <div className="login-button">
            <Link className='submit' to='/profile' onClick={this.login}>登录</Link>
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
