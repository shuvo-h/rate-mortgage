import React from 'react';
import Navbar from './Navbar/Navbar';
import NavBarDrawer from './Navbar/NavBarDrawer';



const Header = () => {
    return (
        <header className='position-relative' style={{minHeight:"60px"}}>
            <Navbar></Navbar>
            <NavBarDrawer />
        </header>
    );
};

export default Header;