import React, { Component } from 'react';
import './navbarAnswer.css';

class NavbarAnswer extends Component { 
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
                              
                        </div>
                    </th>
                  </tr>
                 </thead>
            </table>
            </React.Fragment>
         );
    }
}
 
export default NavbarAnswer;