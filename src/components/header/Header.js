import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    // active style for navbar
    const active = {
        fontWeight: "bold",
        color: "red",
        borderBlockStart: "2px solid #ff0000",
        borderBlockEnd: "2px solid #ff0000"
    };
    return (
        <div className=' header-navbar bg-dark'>
            {/* navItems */}
            <div className='container mx-auto text-center text-white flex justify-center'>
               <NavLink to='/home' activeStyle={active} className='nav-item text-white text-decoration-none'>
                    Home
                </NavLink>
                <NavLink to='/services' activeStyle={active} className='nav-item text-white text-decoration-none'>
                    Services
                </NavLink>
                <NavLink to='/about' activeStyle={active} className='nav-item text-white text-decoration-none'>
                    About-Us
                </NavLink>
                <NavLink to='/contact' activeStyle={active} className='nav-item text-white text-decoration-none'>
                    Contact-Us
                </NavLink>

            </div>
        </div>
    );
};

export default Header;