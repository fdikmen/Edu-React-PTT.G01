//Created by "rccp" snippets 
// PropTypes
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class User extends Component {
    //Default Props
    static defaultProps = {
        userId: 18
    }

    // PropTypes  
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        //shape for object
    }

    render() {
        return (
            <div>User {this.props.name}
                AGE: {this.props.age}
                USERID : {this.props.userId}</div>
        )
    }
}

