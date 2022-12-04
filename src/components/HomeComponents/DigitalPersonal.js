import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const digitalPersonData = {
    title: "Digital, yet personal",
    sub_title:"A mortgage experience made for you",
    info:"We literally invented the Digital Mortgage. But we also offer one-on-one assistance at more than 500 branches across the U.S.​ Whether you prefer to stay at home or meet in person, we are here to tailor your mortgage experience to fit your needs.",
    btn:"Find a branch near you"
}

const DigitalPersonal = () => {
    return (
        <section className='container my-5'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <h2 className='fs-1 my-4'>{digitalPersonData.title}</h2>
                    <h4 className='fs-3 my-3'>{digitalPersonData.sub_title}</h4>
                    <p className='py-3 fs-5 lh-sm'>{digitalPersonData.info}</p>
                    <div className='banner_buttons my-5' style={{display:"block"}}>
                        <button className='refinancing_btn'>{digitalPersonData.btn}</button>
                    </div>
                </div>
                <div className='col-12 col-sm-6 order-first order-md-last' >
                    {/* <StaticImage src='../../images/Home_img/digital.png' alt='banner' /> */}
                </div>
            </div>
        </section>
    );
};

export default DigitalPersonal;