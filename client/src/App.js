import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import JobsList from './components/JobsList';
import JobCreate from './components/JobCreate';
import JobEdit from './components/JobEdit';
import ResourceCreate from './components/ResourceCreate';
import Resources from './components/Resources';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Navbar />
        </div>

        <Route exact path='/' component={Home} />
        <Route exact path='/list' component = {JobsList}/>
        <Route exact path='/edit/:id' component={JobEdit} />
        <Route exact path='/create' component={JobCreate} />
        <Route exact path='/add' component={ResourceCreate} />
        <Route exact path='/resources' component={Resources}/>
      </Router>

    </div>
  );
}

export default App;
