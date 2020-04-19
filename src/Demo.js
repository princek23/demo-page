import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Demo.css'


//class based components
// class Demo extends Component{
//     render(){
//         return <div className="maindiv_style">
//         <h1>HEllO {this.props.name}</h1>
//         <p>Gouri</p>
//         </div>
//     }
// }

//function based components
const Demo = ({props}) =>{      //({name}) --remove props also
    return <div className="maindiv_style">
        <h1>HEllO {props.name}</h1>
        <p>Gouri</p>
        </div>
}

export default Demo;