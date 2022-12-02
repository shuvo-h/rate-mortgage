import React from 'react';
import Navbar from './Navbar/Navbar';
import NavBarDrawer from './Navbar/NavBarDrawer';



const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <NavBarDrawer />
        </header>
    );
};

export default Header;