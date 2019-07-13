import React, { Component } from 'react';



const Hello=()=>{return <h1>Hello</h1>}
class Welcome extends React.PureComponent {  
  render() {
    return <h1>Welcome</h1>
  }
}
function Square(props){
        return(
            <button className='btn btn-light' onClick={props.onClick}>
                {props.value}

            </button>
            
        )
    }
    
export default Square