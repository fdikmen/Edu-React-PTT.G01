//by rce + tab
import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export class Contact extends Component {
  render() {
    return (
      <div>Contact
        <List />
        <Form />
      </div>
    )
  }
}

export default Contact