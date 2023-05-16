//by rce + tab
import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export class Contact extends Component {
    state = {
        contacts: [
            {name: "John Doe", phone: "555-555-5555"},
            {name: "Karen Williams", phone: "444-444-4444"},
            {name: "Henry Johnson", phone: "333-333-3333"}
        ]
    }
  render() {
    return (
      <div>
        <List contacts={this.state.contacts} />
        <Form />
      </div>
    )
  }
}

export default Contact