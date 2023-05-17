import React, { Component } from 'react'

export default class User extends Component {
  render() {
    //const params = window.location.pathname.split("/")[2]
    const params = window.location.pathname.split("/").pop()
    console.log("params", params)
    return (
      <div>User {params}</div>
    )
  }
}
