import React, { Component } from 'react';
import {db,auth} from './services/firebase'

class Signinpage extends Component {

    state = { 
        user:"",
        password:"",
        email:"",
        image:""
    }
  
    handleChange = (event) => {
  
        this.setState({
           [event.target.name]:event.target.value
        })
        return <h1>dd</h1>
    }


    addNewUser = (event) => {
        event.preventDefault()
        db.collection('users')
            .add({
                user: this.state.user,
                password: this.state.password
            })
    }
  
    render() { 
        return ( 
            <div class="container">
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Username: </label>
                <input name="user" class="form-control" placeholder="Enter Username" onChange={this.handleChange}></input>{this.state.user}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">E-Mail: </label>
                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Re-Password</label>
                <input  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" ></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <div>
                <label for="img">Select image:</label>
                <input type="file" id="img" name="image"  ></input>
            
                <button type="submit" class="btn btn-primary" onClick={this.addNewUser}></button>
              </div>
           </form>
         </div>
         );
    }
}
 
export default Signinpage;