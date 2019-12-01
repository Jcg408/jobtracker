import React, { Component } from 'react';

class Today extends Component {
    constructor() {
        super();
        this.state = { today: new Date()};
    }
  
    render() { 
        return ( 
            <div>
                <h4>  {this.state.today.toLocaleDateString()}</h4>
                <h4> {this.state.today.toLocaleTimeString()}</h4>
            </div>
         );
    }
}
 
export default Today ;