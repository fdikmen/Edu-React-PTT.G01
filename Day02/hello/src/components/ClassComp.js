// by using rcc
import React, { Component } from 'react';

// CLASS COMPONENT = STATEFUL COMPONENT
export default class ClassComp
  extends Component {
  // CLASS ATTRIBUTE FIELD
  // constructor
  // LifeCycle Method
  // state
  state = {
    // state attribute
    username: 'John',
  };
  // define method
  render() {
    // JS CODE FIELD
    // define method
    return (
      <div> ClassComp
        User Name : {this.state.username}

        Props Age : {this.props.age}
      </div>
    );
  }
}
