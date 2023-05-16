// 1: Create a class component called Counter
// 2: Import Counter.js into App.js

import React, { Component } from 'react'
import SubCounter from './SubCounter'

export class Counter extends Component {
    state = { count: 0,name: "John"}
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    changeName = (params) => {
        this.setState({
            name: params // params || "Peter"
        })
    }

    render() {
        const decrement = () => {
            this.setState({
                count: this.state.count - 1
            })
        }
        return (
            <div>
                <h2>Counter</h2>
                <h3>Name: {this.state.name}</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick={decrement}>Decrement -</button>
                <button onClick={this.increment}>+ Increment</button>
                <SubCounter countValue={this.state.count} changeName={this.changeName}/>
            </div>
        )
    }
}

export default Counter