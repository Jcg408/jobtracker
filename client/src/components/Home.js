import React from 'react';
import '../css/home.css';
import jobsmin from '../images/jobsmin.png'

const Home = () => {
    return (
        <div className='container' id='home'>
            <h1> The Hunt is On! </h1>
            <img src={jobsmin} alt="search" />
        </div>
    )
}

export default Home
