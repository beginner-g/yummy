import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import {Link} from 'react-router-dom'
import store from '../../redux/store'
import './news.css'
class News extends Component {
  state={
    show:false
  }
  handleClear=()=>{
    this.setState({
      show:false
    })
  }
  componentDidMount(){
    console.log(store.getState().data);
    if(store.getState().data==''&&store.getState().loginform==''){
      this.setState({
        show:true
      })
    }
  }
  render(){
    const {show}=this.state
    return(
      <div className="news">
        <Menu/>
      <div className="news-title">News</div>
      <div className="news-wrap">
        <div className="news-contents">
          暂无好友更新，可以直接去 <Link to='/dishes'>购物区</Link> 转转。
        </div>
      </div>
      <div className={`wrap-box ${show&&'box-active'}`}>
        <div className="box">
          <p>欢迎继续购物</p>
          <p className='clearbox' onClick={this.handleClear}>关闭</p>
        </div>
      </div>
      </div>
    )
  }
}

export default News
