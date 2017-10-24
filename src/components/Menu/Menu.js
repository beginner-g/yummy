import React, { Component } from 'react'
import list from './list.svg'
import './menu.css'
import {Link,withRouter} from 'react-router-dom'
import axios from 'axios'
import store from "../../redux/store"

class Menu extends Component {
  state={
    show:false,
    username:''
  }
  handleMenu=()=>{
    this.setState({
      show:!this.state.show
    })
  }
  handleClose=()=>{
    this.setState({
      show:false
    })
  }
  handleLogin=()=>{
    this.setState({
      show:false
    })
  }
  handleWrap=(e)=>{
    this.setState({
      show:false
    })
  }
  handleUser=()=>{
    this.setState({
      show:false
    })
  }
  componentDidMount(){
     store.getState().loginform.map(t=>{
        this.setState({
          username:t.username
        })
     })
     console.log(store.getState().loginform);
  }
  logout=(e)=>{
    window.localStorage.removeItem('userId')
    this.setState({
      username:''
    })
    this.props.history.push('/')
  }
  render(){
    const {show,username} =this.state
    // console.log(store.getState())
    // console.log(store.getState().loginform)

    return(
      <div className="menu">
        <img onClick={this.handleMenu} className='icon' src={list} alt=""/>
        <div className={`menu-content ${show&&'show'}`} onClick={this.handleWrap}>
        </div>
        <div className='left-wrap' style={{marginLeft:show&&'0px'}}>
          <div className="left">
            <div className="left-item">
              <div className="avatar-user">
                <div className="left-user">
                </div>
                {window.localStorage.getItem('userId')&&<div className='user-login'>
                  <Link onClick={this.handleUser} className='user-name' to='/profile'>{username}</Link>
                  <div className='logout' onClick={this.logout}>退出</div>
                </div>}
              </div>
              <div className="left-list">
                <Link className='list-button' to='/news'>首页</Link>
                <Link onClick={this.handleLogin} className='list-button' to='/profile'>个人中心</Link>
                <Link className='list-button' to='/dishes'>猜你喜欢</Link>
              </div>
              <div className="bottom-button">
                <button onClick={this.handleClose}>关闭</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu)
