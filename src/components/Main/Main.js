import React, { Component } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Profile from '../Profile/Profile'
import {Route} from 'react-router-dom'
class Main extends Component {
  render(){
    return(
      <div className="main">
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/profile' component={Profile}/>
      </div>
    )
  }
}

export default Main
