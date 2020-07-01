import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Data from "./components/Index/Data";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import Question from "./components/Answer/questionCon";

import MainPageSubjects from './MainPage'
import Comments from "./components/Answer/AnswerBox";
import NavbarAnswer from "./components/Answer/navbarAnswer";
import Sidecont from "./components/Answer/Sidecont";

import {db} from './components/services/firebase'
class MainPage extends Component { 
  state={
    clicked:""
  }

 

    
      handleOnClick=(e) =>{
        
        this.setState({
          clicked: e.target.id}, ()=> { 
          console.log(this.state.clicked)
      });
       
      }


  render() { 
    return ( 
      <React.Fragment>
     <Menu onClick = {this.handleOnClick}/>
      <MainPageSubjects {...this.state}/>
    </React.Fragment>
     );
  }
}
 


class Index extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state={
        EASYshowBox:'noshow',
        MEDIUMshowBox:'noshow',
        HARDshowBox:'noshow',
        
    }
}
handleClick(e){
  
 if(e.target.id==='EASY'){
      if(this.state.EASYshowBox==='show'){this.setState({ EASYshowBox:'noshow',})}
      else{
        this.setState({ EASYshowBox:'show'})
      }
    }
    if(e.target.id==='MEDIUM'){
      if(this.state.MEDIUMshowBox==='show'){this.setState({ MEDIUMshowBox:'noshow',})}
      else{
        this.setState({ MEDIUMshowBox:'show'})
      }
    }

    if(e.target.id==='HARD'){
      if(this.state.HARDshowBox==='show'){this.setState({ HARDshowBox:'noshow',})}
      else{
        this.setState({ HARDshowBox:'show'})
      }
    }
  }



  render(){
    const {subject} = this.props.match.params;
    return (

      <React.Fragment>
        <Menu />
 
     
        <Navbar {...this.state} action={this.handleClick}/>
        <Data {...this.state} {...this.props}>{subject}</Data>
       
      </React.Fragment>
    )
  }
}

class Answer extends Index{
      state = 
      {
        questionFull:null,
         questionTitle:this.props.match.params
       
      };

      componentWillMount(){
        db.collection(this.props.match.params.subject)
          .get()
          .then(snapshot => {
             const questions = []
             snapshot.forEach(doc =>{
               const data = doc.data()
               
               if(data.questionTitle===this.props.match.params.name){
                
               this.setState({ questionFull:data.questionFull})
               }
             })
            
          })
          .catch( error => console.log(error))
      }
    
  render(){
   
  
    return(
      
        <React.Fragment>

          <Menu />
          <NavbarAnswer />
       
          <div id="answer">
          
          <div id="left-answer">

 <Question questionTitle={this.props.match.params.name} questionFull={this.state.questionFull} />
          <Comments questionTitle={this.props.match.params.name}/>



          </div>
          <div id="right-answer">
            <Sidecont {...this.state}/>
          </div> </div>
        </React.Fragment>
     
    )
  }
  
}




class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <Route path="/" exact component={MainPage}/>
  
          <Route path="/excercises/:subject" exact component= {Index} />
          <Route path="/excercises/:subject/:name"  component={Answer} />

      </div>
     );
  }
}
 
export default App ;