import React, { Component } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Profile from '../Profile/Profile'
import Dishes from '../Dishes/Dishes'
import NewDish from '../NewDish/NewDish'
import {Route,Switch} from 'react-router-dom'
class Main extends Component {
  render(){
    return(
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
          <Route exact path='/dishes/:id' component={NewDish}/>
          <Route path='/dishes' component={Dishes}/>
        </Switch>
      </div>
    )
  }
}

export default Main
