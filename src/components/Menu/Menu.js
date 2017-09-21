import React, { Component } from 'react'
import list from './list.svg'
import './menu.css'
import {Link} from 'react-router-dom'
class Menu extends Component {
  state={
    show:false
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
  render(){
    const {show} =this.state
    return(
      <div className="menu">
        <img onClick={this.handleMenu} className='icon' src={list} alt=""/>
        <div className={`menu-content ${show&&'show'}`} onClick={this.handleWrap}>
        </div>
        <div className='left-wrap' style={{marginLeft:show&&'0px'}}>
          <div className="left">
            <div className="left-item">
              <div className="left-user">
              </div>
              <div className="left-list">
                <Link className='list-button' to='/'>首页</Link>
                <Link onClick={this.handleLogin} className='list-button' to='/login'>登录</Link>
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

export default Menu
