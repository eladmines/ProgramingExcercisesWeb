import React, { Component} from 'react';
import {db,auth} from './services/firebase';

import { withRouter } from 'react-router-dom'
class LoginPage extends Component {
  constructor(props){
    super(props)
    this.checkUser = this.checkUser.bind(this)
    this.state = { 
      users:[],
        email:"",
        name:"ere",
        password:""
     }
  }
  
     changeUserPassword = (event) => {
       event.preventDefault();
       this.setState({
       email:event.target.value,

      }) 
     }
    checkUser = (event) => {
       event.preventDefault();
       
       this.state.users &&
       this.state.users.map( users =>{
        if(this.state.email==users.email){
          const name=users.name
          localStorage.setItem('isLogin', "true");
          this.props.history.push({
            pathname: '/',
            state: {name: "ere"}
          })

        }  
         
       })
     }

     componentDidMount(){
      db.collection('Users')
      .get()
       .then( snapshot => {
        const users=[]
         snapshot.forEach( doc => {
           const data = doc.data()
           users.push(data)
         })
         this.setState({users:users})
           
         })
         
        
       
     }

    render() { 

        return ( 
            <div className="container">
            <form>
         
              <div className="form-group">
                <label for="exampleInputEmail1">E-Mail: </label>
                <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.changeUserPassword}></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.changeUserPassword}></input>
              </div>
           
              <div>
              
            {this.state.name}
                <button type="submit" className="btn btn-primary" onClick={this.checkUser}>Sign-In</button>
              </div>
           </form>
         </div>
         );
    }
}
 
export default withRouter(LoginPage);