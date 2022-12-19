import React from 'react';
import Navbar from './Navbar/Navbar';
import NavBarDrawer from './Navbar/NavBarDrawer';
import NavbarStatic from './Navbar/NavbarStatic';



const Header = () => {
    return (

        // <header className='position-relative' style={{minHeight:"60px"}}>
            <header className='position-relative' style={{minHeight:"70px", background:"#164b88"}}>
            {/* <Navbar></Navbar> */}
            <NavbarStatic />


            <NavBarDrawer />
        </header>
    );
};

export default Header;