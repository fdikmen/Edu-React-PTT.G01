// Created by "rcce" snippet
import React, { Component } from 'react'

export class BlogItem extends Component {
  render() {
    console.log("BlogItem Props=>", this.props)
    return (
      <div>
        <h1>{this.props.textHead}</h1>
        <p>{this.props.textBody}</p>
        <button>Click For Detail</button>
      </div>
    )
  }
}

export default BlogItem
