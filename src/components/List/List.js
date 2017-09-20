import React, { Component } from 'react'
import './list.css'
class List extends Component {
  state={
    list:[
      {
        id:1,
        avatar:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1816814833,1715388852&fm=27&gp=0.jpg',
        username:'aa'
      },
      {
        id:2,
        avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=700181318,2006532398&fm=27&gp=0.jpg',
        username:'bb'
      },
      {
        id:3,
        avatar:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1492752078,3094009867&fm=27&gp=0.jpg',
        username:'cc'
      },
      {
        id:4,
        avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=379275086,2266952468&fm=27&gp=0.jpg',
        username:'dd'
      },
      {
        id:5,
        avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3968986210,2124031966&fm=27&gp=0.jpg',
        username:'ee'
      },
    ]
  }
  render(){
    const lists=this.state.list.map(t=>(
      <li key={t.id} className='list-item'>
        <div className="list-avatar" style={{backgroundImage:`url(${t.avatar})`}}>
        </div>
        <a className='list-username' href="javascript:;">{t.username}</a>
      </li>
    ))
    return(
      <div className="list">
        {lists}
      </div>
    )
  }
}

export default List
