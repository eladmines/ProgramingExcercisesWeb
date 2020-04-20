import React from 'react';
import './questionContainer.css';

class Question extends React.Component {
    state={
        questionTitle: this.props.questionTitle,
        questionFull: this.props.questionFull
    }

   
    render() { 
        return ( 
            <div>   
                    <div id="left-questions" className="card w-100 bg-light" >
                        <div id="title-question">
                           <span><h1>{this.state.questionTitle}</h1></span>
                        </div>
                        <div id="full-question">
                        <span>{this.props.questionFull  }</span>
                        {console.log(this.props)}
                        </div>
                    </div>
                   
                   
            </div>
            
         );
    }
}
 
export default Question;