import React, { Component } from 'react';
import axios from 'axios'
import FileUploader from './uploads/FileUpload';

class ResourceCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subject: "",
            description: "",
            url: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit=(event)=> {
       
        event.preventDefault();
        const resource = {
            title: this.state.title,
            subject: this.state.subject,
            description: this.state.description,
            url: this.state.url
        }
        
        axios.post('http://localhost:5000/resources/add', resource)
        .then(res=> console.log(res.data));

        console.log(resource)
        window.location = '/resources';
        
    }
        
    render() { 
        return ( 
            <div className='container' id='addresource'>
                <h3>Add Reference</h3>
                <FileUploader/>

                <form onSubmit = {this.handleSubmit}>
                    <div className="resourceform">
                        <label>Title:</label>
                        <input type="text" onChange={this.handleChange} name="title" value={this.state.title} />
                        <br />

                        <label>Subject:</label>
                        <input type="text" onChange={this.handleChange} name="subject" value={this.state.subject} />
                        <br />
                        <label>Description:</label>
                        <input type="text" onChange={this.handleChange} name="description" value={this.state.description} />
                        <br />
                        <label>Url:</label>
                        <input type="text" onChange={this.handleChange} name="url" value={this.state.url} />
                        <br/>
                        <button className="addresource" type="submit" value="submit">Submit</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default ResourceCreate;