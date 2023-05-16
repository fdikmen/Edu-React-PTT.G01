import React, { Component } from 'react'

export default class ClassComp extends Component {

    //by rconst + tab
    constructor(props) {
        super(props)
        console.log("Constructor Called")
    }
    //by cdm + tab
    componentDidMount = () => {
        console.log("ComponentDidMount Called")
    };

    state = {count: 12}

    //by cdu + tab
    componentDidUpdate = () => {
        console.log("ComponentDidUpdate Called")
    };

    //by cwu + tab
    componentWillUnmount = () => {
        console.log("ComponentWillUnmount Called")
    };

    //by scu + tab
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("ShouldComponentUpdate Called")
        console.log("nextProps",nextProps)
        console.log("nextState",nextState)
        if(nextState.count > 18){
            return false;
        }
        return true;
    };
    


    render() {
        console.log("Render Called")
        return (
            <div>ClassComp<br/>
                COUNT : {this.state.count} <br/>
                <button style={{marginTop:'20px',padding:'10px'}} onClick={() => {this.setState({count:this.state.count+1})}}>
                    Increment</button>
            </div>
        )
    }
}
