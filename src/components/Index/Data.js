import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './data.css';
import {Link} from 'react-router-dom';

import Box from './questionBox';
import SideBox from './sideBox';
import {db} from '../services/firebase'

import { withRouter } from 'react-router-dom';
class Data extends Component{
  state={
    questions:null

    
  }

  componentWillMount(){
    
    db.collection( this.props.children)
      .get()
      .then(snapshot => {
         const questions = []
         snapshot.forEach(doc =>{
           const data = doc.data()
           questions.push(data)
         })
         this.setState({ questions:questions})
         console.log(questions)
      })
      .catch( error => console.log(error))
  }

  
  show(){
    
    
    
      return (
        <React.Fragment>
    
           <div id="left-cont">
         
         {
           this.state.questions &&
           this.state.questions.map((question,index) => {
             return (
               <React.Fragment>
                 
              <Link key={index} to={{pathname: `./`+this.props.children+`/`+question.questionTitle}}><Box question={question.questionTitle} questionFull={question.questionFull} image={question.image} level={question.level} {...this.props}/></Link>
               </React.Fragment>
          
             
             )
           })
         }
          </div>
          
          <div id="right-cont">
            <table id="new-questions" className="table-side">
              <tbody>
                <tr>
                  <th>5 Newest Exercises</th>
                </tr>
                {
           this.state.questions &&
           this.state.questions.map( (question,index) => {
            if(index<5)
             return (
              
              <tr key={index}><td> <Link key={index} to={{pathname: `./`+this.props.children+`/`+question.questionTitle}}><SideBox question={question.questionTitle} questionFull={question.questionFull} image={question.image} level={question.level} {...this.props}/></Link></td></tr>
             
             )
           })
         }
         </tbody>
            </table>
          

            <table id="poppular-questions" className="table-side">
              <tbody>
              <tr>
                <th>5 Popular Exercises</th>
              </tr>
              {
           this.state.questions &&
           this.state.questions.map( (question,index) => {
            if(index<5)
             return (
              
              <tr key={index}><td>  <Link key={index} to={{pathname: `./`+this.props.children+`/`+question.questionTitle}}><SideBox question={question.questionTitle} questionFull={question.questionFull} image={question.image} level={question.level} {...this.props}/></Link></td></tr>
             
             )
           })
         }
         </tbody>
              </table>
            
         
          </div>
         
         </React.Fragment>
     
      )
    
  }
render(){
 
  return (
    <div>
  
   <h1>{this.props.level}</h1>
    {this.show()}
    </div>
  )
}
}
 
export default  withRouter(Data);  