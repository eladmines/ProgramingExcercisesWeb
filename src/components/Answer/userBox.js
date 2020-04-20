import React, { Component } from 'react';

import './userBox.css';
class UserBox extends Component {
    state = { 
        name:this.props.name,
        image:this.props.image
     }
    render() { 
        return (

            <div id="container-question-user" >
                <div className="card bg-light" >
                
                    <div className="container-content-box" >
                        <div id="img-user">
                               <img src={this.state.image}></img>
                        </div>
                        <div id="title-user">
                                <div id="title-text">
                                    <div id="name">{this.state.name}</div>
                                   <div id="date">
                                       <p>Date:12/1/2011 </p>
                                   </div>
                                   
                                   
                                </div>
                             
                        </div>
                    </div>
                </div>
             </div>
           
          );
    }
}
 
export default UserBox;