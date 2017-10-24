import React, { Component } from 'react'
import './profile.css'
import pen from './pen.svg'
import List from '../List/List'
import Menu from '../Menu/Menu'
import axios from 'axios'
class Profile extends Component {
  state={
    val:'',
    word:'个性签名',
    username:''
  }
  handleChange=(e)=>{
    this.setState({
      val:e.target.value
    })
  }
  handleSubmit=()=>{
    const {val} =this.state
    this.setState({
      word:val
    })

  }
  handlepen=()=>{
    const {word} =this.state
    this.setState({
      word:''
    })
  }
  componentDidMount(){
    axios.get('http://localhost:3008/login').then(
      res=>{
        res.data.map(t=>{
          this.setState({
            username:t.username
          })
        })
      }
    )
  }
  render(){
    const {val,word,username}=this.state
    console.log(this.state.word)
    return(
      <div className="profile-title">
        <Menu/>
        <div className="profile-header">
          <p>个人中心</p>
        </div>
        <div className='profile'>
          <label className='avatar'>
            <input type='file' className='img-input'/>
          </label>
          <div className="profile-username">
            <div className="pro-username">
              {username}
            </div>
            <div className={`pro-slogan ${word&&'active'}`}>
              <input className='word' type="text" value={val} onChange={this.handleChange}/>
              <button onClick={this.handleSubmit} type='submit'>保存</button>
            </div>
            <div className="over">{word}</div>
          </div>
          <div className="write">
            <img onClick={this.handlepen} className='pen' src={pen} alt=""/>
          </div>
        </div>
        <div className="profile-list">
          <List/>
        </div>
      </div>
    )
  }
}

export default Profile
