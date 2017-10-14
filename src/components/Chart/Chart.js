import React, { Component } from 'react'
import './chart.css'
import {PieChart, Pie,Cell} from 'recharts';
const Color=['#FFCCBC','#C0CA33','#64FFDA','#7E57C2']

class Chart extends Component {
  state={
    list:[]
  }
  handleList=(entry,index)=>{
      this.setState({
        list:[...this.state.list,
        {
          title:entry.name,
          value:entry.value,
          color:Color[index]
        }
      ]
      })
    }
  render(){
    const data = [
      {name: '水分', value: 200},
      {name: '糖分', value: 100},
      {name: '蛋白质', value: 100},
      {name: '脂肪', value: 130}]
    const newList =this.state.list.map((t,i)=>(
      <div key={i} className='chart-list'>
        <div className="list-name" style={{'backgroundColor':t.color}}>
        {t.title}
        </div>
        <div className="list-value" style={{'border':`1px solid ${t.color}`}}>
        {t.value}
        </div>
    </div>
    ))
    return(
      <div className="chart">
        <h1 className="chart-title">营养成分</h1>
        <p className="chart-detail">点击各部分查看详情</p>
        <div className="recharts">
          <PieChart className='recharts-wrapper' width={300} height={300}>
            <Pie data={data} cx={150} cy={150} innerRadius={40} outerRadius={80} dataKey='value'>
              {
                  data.map((entry,index)=>{
                  return (<Cell key={index} fill={Color[index]} onClick={()=>this.handleList(entry,index)}/>)
                })
              }
            </Pie>
           </PieChart>
           {newList}
        </div>
      </div>
    )
  }
}

export default Chart
