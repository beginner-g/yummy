import React, { Component } from 'react'
import './sales-volume.css'
import {AreaChart, Area, XAxis, YAxis, Tooltip} from  'recharts';
class SalesVolume extends Component {
  render(){
    const data = [
      {name: '3月', amount: 70},
      {name: '4月', amount: 100},
      {name: '5月', amount: 300},
      {name: '6月', amount: 200},
      {name: '7月', amount: 278}
];
const width =window.innerWidth-40
console.log(width);
    return(
      <div className="sales-volume">
        <h1 className='sales-title'>销售额</h1>
        <p className="sales-detail">单位：份</p>
      <AreaChart width={width} height={200} data={data} syncId="anyId"
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='amount' fill='rgb(145, 225, 221)' />
      </AreaChart>
      </div>
    )
  }
}

export default SalesVolume
