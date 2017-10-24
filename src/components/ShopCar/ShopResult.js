import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu from '../Menu/Menu'
import store from '../../redux/store'
import ShopCar from '../ShopCar/ShopCar'
import './shopresult.css'
class ShopResult extends Component {
  handleSub=(val,id)=>{
    let newcommodity = store.getState().data
    if(val==='-'){
      if(newcommodity.find(re => re.num>0)){
        newcommodity.find(re => re.id==id).num--
        const path = newcommodity
        store.dispatch({ type: "UPDATA_DATA_SUAN", path})
        }
    }else{
      newcommodity.find(re => re.id==id).num++
      const path = newcommodity
      store.dispatch({ type: "UPDATA_DATA_SUAN", path})
    }
  }
  total = (data) => {
  const total = data.reduce((sum,t) => {
    return sum + t.price * t.num
  },0)
  return total
}
result=()=>{
  store.dispatch({type:'DELETE_DATA'})
  this.props.history.push('/news')
}
  render(){
    const data=store.getState().data
    const total=this.total(data)
    const newData =data.map(t=>(
      <div key={t.id}className="cart-item">
        <div className="cart-item-info">
          <div className="cart-item-poster">
            <img src={t.goods} alt=""/>
          </div>
          <div className="name-price-wrap">
            <div className="cart-item-name">{t.title}</div>
            <div className="cart-item-price">{t.price}</div>
          </div>
        </div>
        <div className="cart-action">
          <div className="minus" onClick={()=>this.handleSub('-',t.id)}>-</div>
          <div className="item-count">{t.num}</div>
          <div className="plus" onClick={()=>this.handleSub('+',t.id)}>+</div>
        </div>
      </div>
    ))
    return(
      <div className="ShopResult">
        <Menu/>
        <div className="resule-title">购物车</div>
        <div className="result">
            <div className="result-hero">
              <div className="total-price">{`${total ? total : '0.00'} 元`}</div>
            </div>
            <div className="cart-list-wrap">
              <div  className="cart-item-list">
                {newData}
              </div>
              <div className="cart-checkout-button" onClick={this.result}>结算</div>
            </div>
        </div>
      </div>
    )
  }
}

export default ShopResult
