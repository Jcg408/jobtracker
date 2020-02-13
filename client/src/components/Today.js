import React, { Component } from 'react';

class Today extends Component {
    constructor() {
        super();
        this.state = { today: new Date()};
    }
  
    render() { 
        return ( 
            <div>
                <p>  {this.state.today.toLocaleDateString()}</p>
                <p> {this.state.today.toLocaleTimeString()}</p>
            </div>
         );
    }
}
 
export default Today ;