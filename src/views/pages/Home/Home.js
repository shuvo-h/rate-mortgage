import React, { useEffect } from 'react';
import "./home.css";
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
import NavbarDrawer from '../../components/common/navbar/NavbarDrawer';


const Home = () => {
    useEffect(()=>{
        // set the page full height vass value (for navbar drawer)
        document.documentElement.style.setProperty("--full_page_height",`${document.documentElement.scrollHeight}px`)
    },[])
    return (
        <div>
            <header>
                <NavBar></NavBar>
                <NavbarDrawer />
            </header>
            <main>
                <Banner></Banner>
                <p className='py-4 my-5 text-center fs-3 px-4' style={{backgroundColor:"#eff4f5"}}>Leave your slow, old-school bank in the dust. Join the future of mortgages. <span><a style={{fontWeight:"600", textDecoration:"none",color:"#6495ED"}} href="https://www.rate.com/redirect?dest=https://apply.guaranteedrate.com/apply/loan-purpose&icid=stickybar:getrates">Get personalized rates</a></span></p>
                <Calculator></Calculator>
                <PurchaseWork></PurchaseWork>
                <hr className='container my-5' />
                <DigitalPersonal></DigitalPersonal>
                <hr className='container my-5' />
                <Mortgage></Mortgage>
                <hr className='container my-5' />
                <Topics></Topics>
                <hr className='container my-5' />
                <Paving></Paving>
            </main>
            <hr className='container my-5' />
            <footer>
                <Footer></Footer>
                <hr className='container my-5' />
                <BottomFooter></BottomFooter>
            </footer>
        </div>
    );
};

export default Home;