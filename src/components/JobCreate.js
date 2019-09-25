import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class JobCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            company: "",
            contact: "",
            action: "",
            date: new Date(),
            note: "",

        }
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDate = (date) => {
        this.setState({
            date: date
        })
    }
    
    handleSubmit = (event) => {
    
        event.preventDefault();
        const job = {
            title: this.state.title,
            company: this.state.company,
            contact: this.state.contact,
            action: this.state.action,
            date: this.state.date,
            note: this.state.note
        }
        console.log(job)
       
    }

    render() {
        return (
            <div>
                <h3>Add a Record</h3>

                <form onSubmit = {this.handleSubmit}>
                    <div className="jobform">
                        <label>Job Title:</label>
                        <input type="text" onChange={this.handleChange} name="title" value={this.state.title} />
                        <br />

                        <label>Company:</label>
                        <input type="text" onChange={this.handleChange} name="company" value={this.state.company} />
                        <br />
                        <label>Contact:</label>
                        <input type="text" onChange={this.handleChange} name="contact" value={this.state.contact} />
                        <br />
                        <label>Action: </label>
                        <input type="text" onChange={this.handleChange} name="action" value={this.state.action} />
                        <br />
                        <label>Date: </label>
                        <div className='datepicker'>
                            <DatePicker
                                selected={this.state.date} onChange={this.handleDate} 
                            />
                        </div>
                       
                        <label>Note: </label>
                        <input type="text" onChange={this.handleChange} name="note" value={this.state.note} />
                        <br />
                     
 
                       <button className="addjob" type="submit" value="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default JobCreate;