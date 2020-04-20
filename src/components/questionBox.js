
import './questionBoxComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { findByDisplayValue, findAllByDisplayValue } from '@testing-library/react';
class questionBox extends Component{
   constructor(props)
   {
      super(props)
      this.state={
         img:this.props.image,
         question:this.props.question,
         questionFull:this.props.questionFull,
         level:this.props.level,

      };
   }
  
   findB(){
      if(this.props.level=='EASY'){
         if(this.props.EASYshowBox=='show')return "noshow";                 
         else{
            return "show";
         }
      }

      if(this.props.level=='MEDIUM'){
         if(this.props.MEDIUMshowBox=='show')return "noshow";                 
         else{
            return "show";
         }
      }

      if(this.props.level=='HARD'){
         if(this.props.HARDshowBox=='show')return "noshow";                 
         else{
            return "show";
         }
      }
        
   }
 

        render(){
           return(
          <div id="container-question" className={this.findB()}>
            <div className="card card-body bg-light" >
              
            <div className="container-content-box" >
               <div id="img-cont">
               <img src={this.props.image}/>
               </div>
              <div id="title">
                 <span>{this.props.question}</span>
                 <div id={this.props.level}  >
                    {this.props.level}
                 </div>
              </div>
              <div id="full">
                 <span>{this.props.questionFull.substring(0,30)}</span>
              </div>
            
              
             </div>
             </div>
             </div>
           )
        }
      }
export default questionBox;