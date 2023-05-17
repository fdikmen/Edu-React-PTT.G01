import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc';

export class User extends Component {
    // state = {
    //     users: [],loading: true,err:''
    // };

    // componentDidMount = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => this.setState({users: json,loading: false}))
    //     .catch(err => this.setState({err: err ,loading: false}))
    // };
    
  render() {
    return (
      <div style={{width:'40%',float:'left'}}>User
       {/* {
              this.state.loading ? <div>Loading...</div> :
              <ul>{
                this.state.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
            </ul>
       } */}
       <ul>{
                this.props.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
            </ul>
      </div>
    )
  }
}

export default LoaderHoc(User,'users')
