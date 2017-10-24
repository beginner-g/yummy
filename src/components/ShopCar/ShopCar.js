import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import shop from './shop.svg'
import './shopcar.css'
import store from '../../redux/store'
class ShopCar extends Component {

  render(){
    const data=store.getState().data
    console.log(data);
    return(
        <Link className='shop-car1' to='/shopresult'>
           <div className="cart_no">{store.getState().data.length}</div>
           <img src={shop} alt=""/>
       </Link>
    )
  }
}

export default ShopCar
