import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import axios from 'axios'
import shop from './shop.svg'
import Chart from '../Chart/Chart'
import SalesVolume from '../SalesVolume/SalesVolume'
import './new-dish.css'
import store from '../../redux/store'
class NewDish extends Component {
  state={
    imgurl:'',
    title:'',
    price:'',
    desc:'',
    data:[],
    buy:false
  }
  componentDidMount(){
    const id=this.props.match.params.id
    axios.get(`http://localhost:3008/dishes/${id}`).then(
      res=>{
        this.setState({
          imgurl:res.data.goods,
          title:res.data.title,
          price:res.data.price,
          desc:res.data.desc,
          data:res.data
        })
      }
    )
  }
  completed=(e)=>{
    e.preventDefault()
    const id=this.props.match.params.id
    const {data} =this.state
    const datas =store.getState().data
    console.log(datas);
    if(!datas.find(t=>t.id==id)){
      store.dispatch({type:'UPDATA_DATA',data})
    }
  }
  render(){
    const {imgurl,title,price,desc,buy}=this.state
    const id =this.props.match.params.id
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
            <div onClick={this.completed} className="new-shop"><img src= {shop} alt=""/></div>
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
