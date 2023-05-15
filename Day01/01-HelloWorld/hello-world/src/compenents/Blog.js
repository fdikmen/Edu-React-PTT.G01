// Created by "rcc" snippet
import React, { Component } from 'react'
import BlogItem from './BlogItem'


export class Blog2 { }
export class Blog3 { }

export default class Blog extends Component {
    render() {
        //JS code
        let divElement = <div>JSX Code Field</div>
        console.log("Blog Component Props=>", this.props)
        return (
            <>

                Blog
                <h1>    Header {this.props.username}</h1>
                {/* background-color: white; */}
                <h2 style={{ color: 'white', backgroundColor: 'red' }}>    SubHeader</h2>
                {5 / 2 == 1.5 ? "Yes" : <b>No</b>}
                <hr />
                {divElement}
                <img src="https://picsum.photos/200/300"
                    className='Test2'
                    alt="Random Image" />

                <button onClick={() => alert("Yes!")}
                    className="Test">Button</button>
                <hr />
                {/* <BlogItem 
                textHead={this.props.blogInfos[0].textHead} 
                textBody={this.props.blogInfos[0].textBody}/>
                <BlogItem 
                textHead={this.props.blogInfos[1].textHead} 
                textBody={this.props.blogInfos[1].textBody}/>
                <BlogItem 
                textHead={this.props.blogInfos[2].textHead} 
                textBody={this.props.blogInfos[2].textBody}/> */}

                {this.props.blogInfos.map((item, index) => {
                    return <BlogItem key={index}
                    textHead={item.textHead} textBody={item.textBody}  />
                })}

                <hr />
            </>
            //   JSX Code
        )
    }
}

/*----------------
import Blog,{Blog2,Blog3} from '/path/to/Blog.js'*/

function getFour() {
    //JS code
    //JS code
    //JS code
    //JS code
    return 4
}