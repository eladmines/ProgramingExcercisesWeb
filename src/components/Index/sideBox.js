import React, { Component } from 'react';
import './sideBox.css';

class NewBox extends Component {
    state = { 
        question:this.props.question
     }
    render() { 
        return ( 
         
            <div className="question">{this.state.question}</div>
              
              
         
         );
    }
}
 
export default NewBox;