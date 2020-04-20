import React, { Component } from 'react';
import './tablecomments.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from '.././services/firebase'


class Comments extends Component {
  
    state={
        answers:null,
        answer:"",
        user:""
        
      }
    
      refreshPage = () => {
        db.collection('Answers')
        .get()
        .then(snapshot => {
           const answers = []
           snapshot.forEach(doc =>{
             const data = doc.data()
           
             answers.push(data)
           })
           this.setState({ answers:answers
         })
        })
        .catch( error => console.log(error))
      }
      componentDidMount(){
        this.refreshPage();
      }

      
      safeRE = (string) => {
        return <pre>{string.split("space").join("\n")}</pre>
        
      }

      addComment = (event) => {
          db.collection('Answers')
          .add({
            user:this.state.user,
            useranswer:this.state.answer,
            date: new Date(),
            question:this.props.questionTitle
          })
      }
  
      updateInputValue = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value
        })
        }
         
          
      
    render() { 
       this.refreshPage();
      
        return ( 
    <React.Fragment>
    <div>
        <form>

            <input type="text" id="user" name="user" placeholder="Insert your name" value={this.state.user} onChange={this.updateInputValue}></input>
        </form>
        <textarea cols="170" rows="10"  id="textarea"  placeholder="Your Code..." name="answer" value={this.state.answer} onChange={this.updateInputValue}>

        </textarea>
        <div id="button-send-comment">
             <button id="button-send" onClick={this.addComment}>Send My Answer</button>
        </div>
    </div>
    {
                       this.state.answers && 
                       this.state.answers.map((comment,index) => {
                        if(this.props.questionTitle===comment.question)
                       
                           return (
                            <div id="comment" className="card w-100 bg-light" key={index}>
     
                            <div id="image">
                               <img src="https://img.icons8.com/ios/50/000000/user-location.png" alt="none"/>
                            </div>
                            <div id="content-comment-container">
                                <div id="user-container">
                                     <div id="user-comment">
                                        {comment.user}
                                    </div>
                                  
                                     <div id="date-comment">
                                      <span> {comment.date.toDate().toString()}</span> 
                                    </div>
                                </div>
                                <div id="answer-comment">
                                    <span>
                                    {this.safeRE(comment.useranswer)}
                                    </span>
                                </div>
                                
                            </div>
                            </div>
                           )
                       })
                    }
                     
               
        </React.Fragment>
               
         );
    }
}
 
export default Comments;