//import React from 'react';
import './navbar.css'
import {assets} from '../../assets/asstes'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img className ="logo" src={assets.logo} alt="" />
            <img className='profile' src={assets.profile_icon} alt="" />
        </div>
    );
};

export default Navbar;