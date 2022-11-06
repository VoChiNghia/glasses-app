import React, { Component } from 'react'
import Glasses from './Glasses'
import Header from './Header'
import {data} from '../data/data'
import { createRef } from 'react'
import Model from './Model'

export default class MainLayout extends Component {
    state = {
        img: {
          "id": 1,
          "price": 30,
          "name": "GUCCI G8850U",
          "url": "./glassesImage/v1.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }
    }
    handleClick = (item) => {
        this.setState({img:item})
       
    }
    
 
    
  render() {
   
    return (
      <div className="home">
         <div className="home-wrapper">
         <Header/>
            <div className="container" >
                {/* <div className="model-wrapper">
                   <div className="row">
                    <div className="col-6 model-item">
                    <img className="w-100" src="./glassesImage/model.jpg" alt="" />
                    <img className="glass-on-model" src={this.state.img} alt=""/>
                    </div>
                    <div className="col-6 ">
                    <img className="w-100" src="./glassesImage/model.jpg" alt="" />
                    </div>
                   </div>
                </div> */}
                <Model src={this.state.img} data={data}/>
            </div>
            <Glasses data={data} handleClick={this.handleClick}/>
         </div>
      </div>
    )
  }
}
