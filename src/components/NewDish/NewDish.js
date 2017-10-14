import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import axios from 'axios'
import shop from './shop.svg'
import Chart from '../Chart/Chart'
import SalesVolume from '../SalesVolume/SalesVolume'
import './new-dish.css'
class NewDish extends Component {
  state={
    imgurl:'',
    title:'',
    price:'',
    desc:''
  }
  componentDidMount(){
    const id=this.props.match.params.id
    axios.get(`http://localhost:3008/dishes/${id}`).then(
      res=>{
        console.log(res.data);
        this.setState({
          imgurl:res.data.goods,
          title:res.data.title,
          price:res.data.price,
          desc:res.data.desc
        })
      }
    )
  }
  render(){
    const {imgurl,title,price,desc}=this.state
    return(
      <div className="new-dish">
        <Menu/>
        <div className="new-title">新品</div>
        <div className="new-info">
          <div className="new-img-wrap">
            <img src={imgurl} alt=""/>
          </div>
          <div className="new-info-card">
            <h1 className="new-name">{title}</h1>
            <div className="new-price">{price}<span>元</span></div>
            <div className="new-shop"><img src= {shop} alt=""/></div>
            <p className="new-desc">{desc}</p>
            <Chart/>
            <SalesVolume/>
          </div>
        </div>
      </div>
    )
  }
}

export default NewDish
