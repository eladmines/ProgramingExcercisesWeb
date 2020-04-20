import React, { Component } from 'react';
import '../css/navbar.css';

class Navbar extends Component { 
    constructor(props){
        super(props)
        this.handleCheck = this.handleCheck.bind(this);
    }
    state={
       EASY:true,
       
       MEDIUM:true,
       HARD:true

    }
    handleCheck(e){
        const lev = e.target.id
        this.setState({
            
           [lev] :e.target.checked
        })
    }

    render() { 
        return ( 
            <React.Fragment>
            
            <table className="table">
                <thead className="">
                  <tr>
                    <th className="col" id="level">
                        <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="inlineCheckbox1" ><span>HARD</span></label>
                                <input className="form-check-input" type="checkbox" id="HARD" value="option1"  onChange={this.handleCheck} checked={this.state.HARD} onClick={this.props.action}></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox1"><span>MEDIUM</span></label>
                                <input className="form-check-input" type="checkbox" id="MEDIUM" value="option1" onChange={this.handleCheck} checked={this.state.MEDIUM} onClick={this.props.action}></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox1" ><span>EASY</span></label>
                                <input className="form-check-input" type="checkbox" id="EASY" value="option1" onChange={this.handleCheck} checked={this.state.EASY} onClick={this.props.action}></input>
                                <span>: Filter By Level</span> 
                        </div>
                    </th>
                  </tr>
                 </thead>
            </table>
            </React.Fragment>
         );
    }
}
 
export default Navbar;