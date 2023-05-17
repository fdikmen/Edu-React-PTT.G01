//by rcc
import React, { Component } from 'react'

export default class ClassComp extends Component {
    state={count:0,name:'Raj'}
increment=()=>{
    this.setState({count:this.state.count+1})
}

componentDidMount() {
    console.log('ClassComp componentDidMount')
}

componentDidUpdate(prevProps, prevState) { 
    console.log('ClassComp componentDidUpdate')
    return true
}
componentWillUnmount() {
    console.log('ClassComp componentWillUnmount')
 }


  render() {
    return (
      <div style={{width:'40%',float:'left'}}>ClassComp
      <hr/>
      Count: {this.state.count}<br/>
        <button onClick={this.increment}>Increment</button>
        <br/>
        Name: {this.state.name}
      </div>
    )
  }
}
