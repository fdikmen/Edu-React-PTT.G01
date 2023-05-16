import React, { Component } from 'react'

export class StateSample extends Component {
    /*constructor(props) {
      super(props)
    
      this.state = {
        name:'John',
        age:20,
        address:'New York'
      }
    }*/
    
    state = {
        name:'John',
        age:20,
        address:'New York'
    }

    changeState = () => {
        this.setState({
            name:'Jane',age:this.state.age+1
        })
    }
  render() {
    return (
      <div>StateSample
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h2>{this.state.age}</h2>
        <h2>{this.state.age}</h2>
        <h2>{this.state.age}</h2>
        <h3>{this.state.address}</h3>
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}

export default StateSample