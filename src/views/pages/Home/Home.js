import React from 'react';
import BottomFooter from '../../components/common/footer/BottomFooter';
import Footer from '../../components/common/footer/Footer';
import Banner from '../../components/HomeComponents/Banner';
import Calculator from '../../components/HomeComponents/Calculator';
import DigitalPersonal from '../../components/HomeComponents/DigitalPersonal';
import Mortgage from '../../components/HomeComponents/Mortgage';
import Paving from '../../components/HomeComponents/Pavings';
import PurchaseWork from '../../components/HomeComponents/PurchaseWork';
import Topics from '../../components/HomeComponents/Topics';
import NavBar from '../../components/common/navbar/NavBar';

const Home = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                <Banner></Banner>
                <p style={{padding:"20px 0",fontSize:"18px",backgroundColor:"#eff4f5", textAlign:"center"}}>Leave your slow, old-school bank in the dust. Join the future of mortgages. <span><a style={{fontWeight:"600", textDecoration:"none",color:"#6495ED"}} href="https://www.rate.com/redirect?dest=https://apply.guaranteedrate.com/apply/loan-purpose&icid=stickybar:getrates">Get personalized rates</a></span></p>
                <Calculator></Calculator>
                <PurchaseWork></PurchaseWork>
                <DigitalPersonal></DigitalPersonal>
                <Mortgage></Mortgage>
                <Topics></Topics>
                <Paving></Paving>
            </main>
            <footer>
                <Footer></Footer>
                <BottomFooter></BottomFooter>
            </footer>
        </div>
    );
};

export default Home;