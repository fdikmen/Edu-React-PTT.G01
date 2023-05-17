import React, { Component } from 'react'
import axios from 'axios';

export default class UserListFetchAxios extends Component {
    state = { users: [], loading: true };
    componentDidMount = () => {
        // CALL API
        /*
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data }))
            .catch(error => console.log(error))
            */

        axios.get('https://jsonplaceholder.typicode.com/users')
            //.then(response => console.log(response.data))
            .then(result => this.setState({ users: result.data }))
            .catch(error => console.log(error))
            .finally(() => this.setState({ loading: false }))

        axios.delete('https://jsonplaceholder.typicode.com/users/2')
            //.then(response => console.log(response.data))
            .finally(() => this.setState({ loading: false }))

        axios.post('https://jsonplaceholder.typicode.com/users',
            { name: 'John Doe', username: 'johndoe' }
        )
            .then(response => console.log(response))
            .catch(error => console.log(error))

        axios.put('https://jsonplaceholder.typicode.com/users/2',
            { name: 'John Doe', username: 'johndoe' }
        )
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

    render() {

        return (
            <>
                User List Fetch Axios

                {
                    this.state.loading
                        ? <div>Loading...</div>
                        : <ul>
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
