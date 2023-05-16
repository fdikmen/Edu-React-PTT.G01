//by rce + tab
import React, { Component } from 'react'

export class Form extends Component {
    state = {
        name: '',
        phone: ''
    }
    /*onchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onchangePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }*/
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
  render() {
    return (
      <div className='FormComponent'>
        <input type="text" placeholder="Name" 
        name='name'
        id='name'
        value={this.state.name} 
        // onChange={this.onchangeName}
        onChange={this.onChange}
        />

        <input type="text" placeholder="Phone"
        name='phone' 
        value={this.state.phone} 
        //onChange={this.onchangePhone}
        onChange={this.onChange}/>
        <button>Add</button>
      </div>
    )
  }
}

export default Form