import React, { Component } from 'react'

export default class UserListFetch extends Component {
    state = { users: [], loading: true };
    componentDidMount = () => {
        // CALL API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data }))
            .catch(error => console.log(error))
            .finally(() => this.setState({ loading: false }))
        //.then(json => console.log(json))
    };

    render() {

        return (
            <>
                User List Fetch

                {
                    this.state.loading 
                    ? <div>Loading...</div>
                    :  <ul>
                            {this.state.users.map((user) => (
                                <li key={user.id}>
                                    {user.name}
                                </li>
                            ))}
                        </ul>
                }
            </>
        )
    }
}


// IF-ELSE
/**
 * if (this.state.loading===true) {
 *     return <div>Loading...</div>
 * } else {
 *    return <ul>...</ul>
 * }
 */

// INLINE IF
/*
 * {this.state.loading ? <div>Loading...</div> : <ul>...</ul>}
 */