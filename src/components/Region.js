import React, { Component } from 'react';

class Region extends Component{
  render(){
    return(
      <div className='model' hidden={this.props.ismodel}>
        <h4 onClick={this.props.ClickCloseModel} data-toggle="tooltip" data-placement="left" title="close">X</h4>
        <div className='result'>
          <h2 data-toggle="tooltip" data-placement="left" title={this.props.region}>{this.props.region}</h2>
          <button className='btn btn-outline-success rounded btn-block'>view trip</button>
          <button className='btn btn-success rounded btn-block'>about region</button>
        </div>
      </div>
    )
  }
}

export default Region;