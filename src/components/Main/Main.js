import React, { Component } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Profile from '../Profile/Profile'
import Dishes from '../Dishes/Dishes'
import NewDish from '../NewDish/NewDish'
import News from '../News/News'
import ShopResult from '../ShopCar/ShopResult'
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopCar from '../ShopCar/ShopCar'
import store from '../../redux/store'
class Main extends Component {
  render(){
    return(
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' render={()=>{
            if(!window.localStorage.getItem('userId')){
              return <Redirect to='/login'/>
            }else{
              return <Profile/>
            }
          }}/>
          <Route exact path='/dishes/:id' component={NewDish}/>
          <Route path='/dishes' component={Dishes}/>
          <Route path='/news' component={News}/>
        <Route path='/shopresult' component={ShopResult}/>
        </Switch>
        {store.getState().data.length!==0&&<ShopCar/>}
      </div>
    )
  }
}

export default Main
