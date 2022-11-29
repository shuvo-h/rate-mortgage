import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div style={{margin:"0 10%"}}>
            <header>
                <NavBar></NavBar>
            </header>
            <body>
                <Banner></Banner>
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;