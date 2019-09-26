import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';

const Job = (props) => (
            <tr className = 'container'>
                <td>{props.job.title}</td>
                <td>{props.job.company}</td>
                <td>{props.job.contact}</td>
                <td>{props.job.action}</td>
                <td>{props.job.date.substring(0,10)}</td>
                <td>{props.job.note}</td>
                <td>
               
                     <button><Link to ={'/edit/'+props.job._id}>Edit</Link> </button>
                     <button onClick={() => {props.deleteJob(props.job._id)} }>Delete</button>
                     
                </td>
            </tr>  
)

class JobsList extends Component {
   constructor(props) {
       super(props);

       this.state = {jobs: []};
    }
     componentDidMount=()=> {
        axios.get('http://localhost:5000/jobs/list/')
        .then(res=> {
            this.setState({
                jobs: res.data
            })
        })   
        .catch(error=> console.log('There is an error', error)
            
        )      
     }

     deleteJob=(id)=> {
         axios.delete('http://localhost:5000/jobs/'+id)
         .then(res=>console.log(res.data))

         this.setState({
             jobs: this.state.jobs.filter(item=> item._id !== id)
         })
     }
     jobList = ()=> {
         return this.state.jobs.map(jobItem => {
            return <Job job={jobItem} deleteJob={this.deleteJob} key={jobItem._id}/>
     })
    }
     
    render() { 
        return ( 
            <div className = 'container'>
               
                <table className = 'table'>
                    <thead className = 'thead-light'>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Action</th>
                            <th>Date</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.jobList()}
                        
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default JobsList;