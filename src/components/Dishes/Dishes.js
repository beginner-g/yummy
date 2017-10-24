import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import axios from 'axios'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import './dishes.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import news from './news.svg'
class Dishes extends Component {
  state={
    dish:[]
  }
  componentDidMount(){
    axios.get('http://localhost:3008/dishes').then(
      res=>{
        this.setState({
          dish:res.data
        })
      }
    )
  }
  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    }

    const slides=this.state.dish.map(t=>(
      <div className="dish-card-wrap" key={t.id}>
        <Link to={`/dishes/${t.id}`}>
          <div className="dish-card">
            <div className="dish-card-poster">
              <img src={t.goods} alt=""/>
            </div>
            <div className="dish-card-detail">
              <h1 className="dish-title">{t.title}</h1>
              <div className="dish-price">{t.price}<span>元</span></div>
              <div className="dish-news">
                <div className="news-box">
                  <img src={news} alt=""/>
                  <span>3</span>
                </div>
              </div>
              <div className="dish-desc">{t.desc}</div>
            </div>
          </div>
        </Link>
      </div>
    ))
    const slider=(
      <Slider {...settings}>
        {slides}
      </Slider>
    )
    return(
      <div className="dishes">
        <Menu/>
        <div className="title-header">猜你喜欢</div>
        <div className="banner">
          {slider}
        </div>
      </div>
    )
  }
}

export default Dishes
