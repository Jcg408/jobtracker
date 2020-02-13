import React from 'react';
import { NavLink } from 'react-router-dom';
import Today from './Today';
import '../css/navbar.css'

const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul className='btn'>
                <button><NavLink to="/">Home</NavLink></button>
                <button><NavLink to="/list"> Job Hunt List</NavLink></button>
                <button><NavLink to="/create"> Add Record</NavLink> </button>
                <button><NavLink to="/resources">Reference Material</NavLink> </button>
                <button><NavLink to="/add">Add to Reference List</NavLink></button>
            </ul>
            <section className='today'>
                <Today />
            </section>
        </nav>
    )
}

export default Navbar;
