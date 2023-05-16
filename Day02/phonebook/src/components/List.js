//by rce + tab
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class List extends Component {
    state = { filterText: "" };

    static propTypes = {
        contacts: PropTypes.array.isRequired
    };
    onchangeFilterText = (event) => {
        // console.log("event",event)
        this.setState({
            filterText: event.target.value
        })
    }

  render() {
    // console.log("List Props=>", this.props)
    console.log("List State filterText=>", this.state.filterText)

    const filteredContacts = this.props.contacts.filter(
        contact => {
            return contact.name.toLowerCase()
                            .indexOf(this.state.filterText.toLowerCase()) !== -1
                            ||
                            contact.phone.toLowerCase()
                            .indexOf(this.state.filterText.toLowerCase()) !== -1
        }
    )

    return (
      <div className='ListComponent'>
        <input type="text" placeholder="Filter Contacts..." 
        value={this.state.filterText}
        onChange={this.onchangeFilterText}
        />
       <ul>
              {this.props.contacts && filteredContacts.map((contact, index) => (
                    <li key={index}>
                        <span>{contact.name}</span>
                        {contact.phone}</li>
                ))}
       </ul>
      </div>
    )
  }
}

export default List