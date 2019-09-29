import React, { Component } from 'react';
import axios from 'axios';

class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = { resources: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/resources/list/')
            .then(res => {
                this.setState({
                    resources: res.data
                })
            })
            .catch(error => console.log('There is an error', error)
            )
    }

    deleteResource = (id) => {
        axios.delete('http://localhost:5000/resources/' + id)
            .then(res => console.log(res.data))

        this.setState({
            resources: this.state.resources.filter(item => item._id !== id)
        })
    }

    render() {
        return (
            <div className='container' id=''>
                <ul>
                    {this.state.resources.map(item =>
                        <li key={item._id}>
                            <h4>{item.title } </h4>  
                            <h5> Subject:  {item.subject } </h5>
                             <p>Description: {item.description} Url: {item.url} </p>
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}

export default Resources;


