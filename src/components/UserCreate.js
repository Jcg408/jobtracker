import React, { Component } from 'react';
class UserCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            username: this.state.username
        }
        console.log(user)

        this.setState({
            username: ""
        })
    }
    render() {
        return (
            <div>
                <h3>Add User</h3>
                <form onSubmit = {this.handleSubmit}>
                    <div className = 'form-group'>
                        <label> Username: </label>
                        <input type = 'text' required className= 'form-control' 
                        name='username' value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className = 'form-group'>
                        <input type = 'submit' value='Add User' className = 'btn'/>
                    </div>
                </form>
            </div>
        );

    }
}

export default UserCreate;