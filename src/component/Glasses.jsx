import React, { Component } from 'react'

export default class Glasses extends Component {
    state = {
        src:[]
    }
    
   handleRef = (e) => {
   if(e){
    const src = e?.src.split('/')
    const data = `./${src[3]}/${src[4]}`
    const key = {[src[4]]:data}
    
   }

   }
   handleClickRef = ()=>{
   
   }
  render() {
    const {data,handleClick} = this.props
    return (
    <div className="glasses">
        <div className="glasses-wapper">
        {
            data.map((item,index) =>(
                <div key={index} onClick={() => {handleClick(item)}} >
                   <img src={item.url} alt="" ref={this.handleRef} onClick={() => {this.handleClickRef()}}/>
                </div>
            ))
        }
        </div>
       
    </div>

    )
  }
}
