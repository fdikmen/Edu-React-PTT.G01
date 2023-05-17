import React, { Component } from 'react'

/*(componentX)=>{

    if (condition) {
        return componentX
    }
    else{
        return componentY
    }
}*/

const LoaderHoc = (WrapperComp,field)=>{
    return class LoaderHoc extends Component {
        render() {
          return this.props[field].length === 0 ? <div>Loading...</div> :
                <WrapperComp {...this.props}></WrapperComp>
        }
      }
}
// const LoaderHoc = (ComponentParams) => {
//     return (props) => props.loading === false
//     ? (  <ComponentParams {...props}></ComponentParams>)
//     : (    <div>Loading ...</div>  );
//   }
  
  
  
  export default LoaderHoc;