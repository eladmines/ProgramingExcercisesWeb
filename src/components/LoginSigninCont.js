import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import '../css/signup.css';


class Login extends Component {
    render() { 
      
        return ( 
            <React.Fragment>
            <div id="login-buttons">
            <Link to={`SignupPage`} ><a href="">Sign up</a></Link> |  <Link to={`LoginPage`} ><a href="">Sign in</a></Link>
            
            </div>
            </React.Fragment>
         );
    }
}

export default Login;

