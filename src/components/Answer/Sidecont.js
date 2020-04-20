import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {db} from '../services/firebase';
import SideBox from '../Index/sideBox'
class Sidecont extends Component {
    
        state={
            questions:null,
            questionTitle:'',
            questionFull:''
            
          }
          componentDidMount(){
            db.collection('JAVA')
              .get()
              .then(snapshot => {
                 const questions = []
                 snapshot.forEach(doc =>{
                   const data = doc.data()
                   questions.push(data)
                 })
                 this.setState({ questions:questions})
              })
              .catch( error => console.log(error))
          }
    
    render() { 
        return (  
        <div>
        <table id="related-questions" className="table-side">
          <tbody>
            <tr>
              <th>5 Newest Exercises</th>
            </tr>
            {
           this.state.questions &&
           this.state.questions.map( (question,index) => {
            if(index<5)
             return (
            
              <tr key={index}><td><Link to={{pathname: './answer' , state: {questionTitle:question.questionTitle, questionFull:question.questionFull}}}><SideBox question={question.questionTitle} questionFull={question.questionFull} image={question.image} level={question.level} {...this.props}/></Link></td></tr>
            
             )
           })
         }
            </tbody>   
        </table>


        
     
      </div> );
    }
}
 
export default Sidecont;