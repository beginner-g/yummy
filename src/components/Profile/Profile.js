import React, { Component } from 'react'
import './profile.css'
import pen from './pen.svg'
import List from '../List/List'
class Profile extends Component {
  state={
    val:'',
    word:'',

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
  render(){
    const {val,word}=this.state
    console.log(this.state.word)
    return(
      <div className="profile-title">
        <div className="profile-header">
          <p>个人中心</p>
        </div>
        <div className='profile'>
          <label className='avatar' type='file'>
            <input type='file' className='img-input'/>
          </label>
          <div className="profile-username">
            <div className="pro-username">
              beginner
            </div>
            <div className={`pro-slogan ${word&&'active'}`}>
              <input className='word' type="text" value={val} onChange={this.handleChange}/>
              <button onClick={this.handleSubmit} type='submit'>保存</button>
            </div>
            {word}
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
