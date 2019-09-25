import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import JobsList from './components/JobsList';
import JobCreate from './components/JobCreate';
import JobEdit from './components/JobEdit';
import UserCreate from './components/UserCreate';

function App() {
  return (
    <Router>
      <div className='container'>
          <Navbar />

      </div>
    
      <Route exact path='/' component={JobsList} />
      <Route exact path='/edit/:id' component={JobEdit} />
      <Route exact path='/create' component={JobCreate} />
      <Route exact path = '/user' component = {UserCreate}/>
      
    </Router>
  );
}

export default App;
