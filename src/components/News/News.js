import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import {Link} from 'react-router-dom'
import './news.css'
class News extends Component {
  render(){
    return(
      <div className="News">
        <Menu/>
      <div className="news-title">News</div>
    <div className="news-wrap">
        <div className="news-contents">
          暂无好友更新，可以直接去 <Link to='/dishes'>购物区</Link> 转转。
        </div>
      </div>
      </div>
    )
  }
}

export default News
