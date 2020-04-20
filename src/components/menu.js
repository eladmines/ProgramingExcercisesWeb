import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LoginSigninCont';
import {Link} from 'react-router-dom';
import * as $ from 'jquery';

import '../css/menu.css';

import "bootstrap/js/src/collapse.js";
class Menu extends Component{
render(){
        return (
      
<nav className="navbar navbar-expand-md  navbar-dark">
  <a className="navbar-brand" href="#">{String.fromCharCode(60)+String.fromCharCode(47)+String.fromCharCode(62)} Excode</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to={{pathname:"/" , state: { subject : 'Main' }}}  className="nav-link" name="elad" id="Main" onClick={this.props.onClick}>Main</Link>
    
      </li>
      <li className="nav-item">
      <Link to={{pathname:"/" , state: { subject : 'About' }}} className="nav-link" id="About"  onClick={this.props.onClick}>About Us</Link>
      </li>
      <li className="nav-item">
      <Link to={{pathname:"/" , state: { subject : 'Contact' }}}  className="nav-link" id="Contact"  onClick={this.props.onClick}>Contact Us</Link>
      </li>    
    </ul>
  </div>  
</nav>

          );


    
    }}
 
export default Menu;