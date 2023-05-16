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
        ],
        age: 30
    }

    addContact = (newContact) => {
        this.setState({
            contacts: [...this.state.contacts, newContact]
        })

        /*
        const contacts = this.state.contacts;
        const age = this.state.age;

        {contacts, age} = this.state;
        */

        // Alernative way with PUSH
        /*
        const contacts = this.state.contacts;
        contacts.push(newContact);
        this.setState({
            contacts // contacts: contacts
        })
        */
    }

  render() {
    
    return (
      <div>
        <List contacts={this.state.contacts} />
        <Form addContact={this.addContact}/>
      </div>
    )
  }
}

export default Contact