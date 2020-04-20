import React, { Component } from 'react';
import './css/mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';




class MainPageSubjects extends Component {
   theData = [
        {
           subject: 'JAVASCRIPT',
           image:'https://img.icons8.com/color/144/000000/javascript.png',
        },

        {
            subject: 'HTML',
            image:'https://img.icons8.com/color/144/000000/html-5.png',
         },
         {
            subject: 'C++',
            image:'https://img.icons8.com/color/144/000000/c-plus-plus-logo.png',
         },
         {
            subject: 'C',
            image:'https://img.icons8.com/color/144/000000/c-programming.png',
         },
         {
            subject: 'C#',
            image:'https://img.icons8.com/color/144/000000/c-sharp-logo-2.png',
         },
         {
            subject: 'PHP',
            image:'https://img.icons8.com/dusk/144/000000/php-logo.png',
         },
         {
            subject: 'JAVA',
            image:'https://img.icons8.com/color/144/000000/java-coffee-cup-logo.png',
         },
         {
            subject: 'PYTHON',
            image:'https://img.icons8.com/color/144/000000/python.png',
         },
         {
            subject: 'SQL',
            image:'https://img.icons8.com/color/144/000000/microsoft-sql-server.png',
         },
         {
            subject: 'TypeScript',
            image:'https://img.icons8.com/color/144/000000/typescript.png',
         },
         {
            subject: 'ANGULAR',
            image:'https://img.icons8.com/color/144/000000/angularjs.png',
         },
         {
            subject: 'REACT',
            image:'https://img.icons8.com/officel/144/000000/react.png',
         },
    ]
   
    choose = () =>{
        switch(this.props.clicked){
            case 'About' : return (<h1>About</h1>)
            case 'Contact' : return (  
               <div id="contact-desc">

                        <input type="text" id="fname" name="firstname" placeholder="Your name.." /> {'\n'}
                        <input type="text" id="fname" name="firstname" placeholder="Subject.." /> {'\n'}
                        <input type="text" id="fname" name="firstname" placeholder="Your E-Mail.." /> {'\n'}
                        <textarea id="subject" name="subject" placeholder="" ></textarea> {'\n'}
                        <input type="submit" value="Submit" />
               </div>
            )
            case 'Main' :return(<div><span>&#10004;</span> More than 5000 programming exercise  {'\n'}    <span>&#10004;</span>  More than 10 Languages    {'\n'} <span>&#10004;</span> More than 10,000 comments</div>     ) 
            default: return(<div><span>&#10004;</span> More than 5000 programming exercise  {'\n'}    <span>&#10004;</span>  More than 10 Languages    {'\n'} <span>&#10004;</span> More than 10,000 comments</div>     )
        }
    }
    render() { 
        
        return (  
            <div id="container-all-my">
                <div id="left-container">
                    <div id="line-up">

                    </div>
                   <div id="image-container">

                   </div>
                   <div id="desc-container">
                  
                  { this.choose()}
                   </div>
                  
                </div>
                <div id="right-container">

                    {this.theData.map((subject,index)=>{
                        return(
                            <div className="wrap" key={index}>
                        
                            <Link to={{pathname:"./excercises/"+subject.subject}}>
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front">
                                            <img src={subject.image} alt="Paris"></img>
                                        </div>
                                        <div className="flip-box-back">
                                            <h2>{subject.subject}</h2>
                                        
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            </div>)
                    
                    })}


               { /*  

                 
                    <div className="wrap">
                        
                    <Link to={{pathname:"./excercises"+this.state.subject, state: { subject : 'JAVASCRIPT' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/javascript.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>JAVASCRIPT</h2>
                                
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="wrap">
                    <Link to={{pathname:"./excercises", state: { subject : 'HTML' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/html-5.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>HTML5</h2>
                                 
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="wrap">
                    <Link to={{pathname:"./excercises", state: { subject : 'C++' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/c-plus-plus-logo.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>C++</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="wrap space">
                    <Link to={{pathname:"./excercises", state: { subject : 'C' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/c-programming.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>C</h2>
                              
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                   
                    <div className="wrap space">
                    <Link to={{pathname:"./excercises", state: { subject : 'C#' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/c-sharp-logo-2.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>C#</h2>
                           
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="wrap space">
                    <Link to={{pathname:"./excercises", state: { subject : 'PHP' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/dusk/144/000000/php-logo.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>PHP</h2>
                         
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="wrap space">
                    <Link to={{pathname:"./excercises", state: { subject : 'JAVA' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                  <img src="https://img.icons8.com/color/144/000000/java-coffee-cup-logo.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>JAVA</h2>
                                
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="wrap space">
                    <Link to={{pathname:"./excercises", state: { subject : 'PYTHON' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/python.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>PYTHON</h2>
                                 
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="wrap space">
                    <Link to={{pathname:"./excercises", state: { subject : 'SQL' }}}>
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/microsoft-sql-server.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>SQL</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="wrap space">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/color/144/000000/typescript.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>TypeScript</h2>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                  
                                    <img src="https://img.icons8.com/color/144/000000/angularjs.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>ANGULAR</h2>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap space">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src="https://img.icons8.com/officel/144/000000/react.png" alt="Paris"></img>
                                </div>
                                <div className="flip-box-back">
                                    <h2>REACT</h2>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
               */}
                </div>

            <div id="bottom-line">

            </div>


            </div>
            

























          
           
          
           

         )
    }
}
 
export default MainPageSubjects;