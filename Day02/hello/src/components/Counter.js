// 1: Create a class component called Counter
// 2: Import Counter.js into App.js

import React, { Component } from 'react'
import SubCounter from './SubCounter'

export class Counter extends Component {
    state = { count: 0}
    increment = () => {
        this.setState({
            count: this.state.count + 1
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
                <h3>Count: {this.state.count}</h3>
                <button onClick={decrement}>Decrement -</button>
                <button onClick={this.increment}>+ Increment</button>
                <SubCounter countValue={this.state.count}/>
            </div>
        )
    }
}

export default Counter