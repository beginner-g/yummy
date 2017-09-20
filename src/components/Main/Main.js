import React, { Component } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Profile from '../Profile/Profile'
import {BrowserRouter as Router,Route} from 'react-router-dom'
class Main extends Component {
  render(){
    return(
      <div className="main">
        <Route exact path='/' component={Home}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Router path='/profile' component={Profile}/>
        <Profile/>
      </div>
    )
  }
}

export default Main
