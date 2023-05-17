import React, { Component } from 'react'
import LoaderHoc from './LoaderHoc';
export class Post extends Component {
    // state = {
    //     posts: [],loading: true,err:''
    // };
    // componentDidMount = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => this.setState({posts: json,loading: false}))
    //     .catch(err => this.setState({err: err ,loading: false}))
    // };
    
  render() {
    return (
      <div style={{width:'40%',float:'left'}}>Post
       {
                <ul>{
                    this.props.posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
                </ul>
       }
      </div>
    )
  }
}

export default LoaderHoc(Post,'posts')
