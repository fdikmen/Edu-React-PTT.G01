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
    return (
      <div>
        <input type="text" placeholder="Filter Contacts..." 
        value={this.state.filterText}
        onChange={this.onchangeFilterText}
        />
       <ul>
              {this.props.contacts && this.props.contacts.map((contact, index) => (
                    <li key={index}>
                        {contact.name} 
                        {contact.phone}</li>
                ))}
       </ul>
      </div>
    )
  }
}

export default List