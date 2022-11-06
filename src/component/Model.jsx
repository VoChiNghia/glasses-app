import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    const {src} = this.props
    
    return (
        <div className="model-wrapper">
        <div className="row">
         <div className="col-6 model-item">
         <img className="w-100" src="./glassesImage/model.jpg" alt="" />
         <img className="glass-on-model" src={src.url} alt=""/>
         <div className="model-info">
            <h3>{src.name}</h3>
            <p>{src.desc}</p>
         </div>
         </div>
         <div className="col-6 p-0">
         <img className="w-100" src="./glassesImage/model.jpg" alt="" />
         </div>
        </div>
     </div>
    )
  }
}
