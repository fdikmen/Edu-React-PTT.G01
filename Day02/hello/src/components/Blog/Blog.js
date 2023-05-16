// by using rcc + tab
import React, { Component } from 'react'
import './Blog.css'

export class Blog extends Component {
    // CLASS FIELD
    // constructor
    // by using rconst + tab
    constructor(props) {
      super(props)
      console.log('constructor called')
      // CALL API
        // SET STATE
        // AUTHENTICATE CONTROL
        
    }

    /*sayhello = function(){
      console.log('hello')
    }*/
    // define function inside class
    sayhello = () => {
      console.log('hello')
    }

  

  render() {
    // JS FIELD
    const h2Style = {
      color:'white',
      backgroundColor:'blue',
      padding:'20px'
    }
    // define function inside render - JS FIELD
    const sayhello2 = () => {
      console.log('hello 2')
    }


    return (
      <div>Blog
        <h1 className='h1Custom'>Blog</h1>
        <h2 style={h2Style}>Blog</h2>
        <p className='paragraph'>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit.
        </p>
        <p id="blog">
          Lorem ipsum dolor sit 
          amet
        </p>
        <button style={{backgroundColor:'red',color:'white',
        borderRadius:'25%',border:'1px solid yellow',padding:'20px'}} >Click Me</button>

        <button onClick={this.sayhello}>Click Me</button>

        <button onClick={sayhello2}>Click Me Type 2</button>

      </div>
    )
  }
}

export default Blog
