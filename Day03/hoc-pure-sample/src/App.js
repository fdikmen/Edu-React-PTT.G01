import Post from "./components/Post";
import PureSampleComp from "./components/PureSampleComp";
import User from "./components/User";
import React, { Component } from 'react'

export class App extends Component {
  state = {
    users: [], loading: true, err: '', posts: []
  };
  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ users: json, loading: false }))
      .catch(err => this.setState({ err: err, loading: false }))

      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({ posts: json, loading: false }))
        .catch(err => this.setState({ err: err, loading: false }))
      }, 3000);
  };
  render() {
    return (
      <>
        <h1>Higher Order Components & Pure Components</h1>
        <PureSampleComp/>
        <br/>
        <hr/>
        <User loading={this.state.loading} users={this.state.users} />
        <Post loading={this.state.loading} posts={this.state.posts}/>
      </>
    )
  }
}


export default App;
