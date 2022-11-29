import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import Calculator from '../components/HomeComponents/Calculator';
import PurchaseWork from '../components/HomeComponents/PurchaseWork';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <body>
                {/* <Banner></Banner> */}
                {/* <p style={{padding:"20px 0",fontSize:"18px",backgroundColor:"#eff4f5", textAlign:"center"}}>Leave your slow, old-school bank in the dust. Join the future of mortgages. <span><a style={{fontWeight:"600", textDecoration:"none",color:"#6495ED"}} href="https://www.rate.com/redirect?dest=https://apply.guaranteedrate.com/apply/loan-purpose&icid=stickybar:getrates">Get personalized rates</a></span></p> */}
                {/* <Calculator></Calculator> */}
                <PurchaseWork></PurchaseWork>
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;