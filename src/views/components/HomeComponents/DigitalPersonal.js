import React from 'react';

const digitalPersonData = {
    title: "Digital, yet personal",
    sub_title:"A mortgage experience made for you",
    info:"We literally invented the Digital Mortgage. But we also offer one-on-one assistance at more than 500 branches across the U.S.​ Whether you prefer to stay at home or meet in person, we are here to tailor your mortgage experience to fit your needs.",
    btn:"Find a branch near you"
}

const DigitalPersonal = () => {
    return (
        <section style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem", borderTop:"1px solid lightgrey",borderBottom:"1px solid lightgrey", padding:"3rem 0"}} className="base_container">
            <div>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{digitalPersonData.title}</h2>
                <h4 style={{fontSize:"2rem", lineHeight:"2.5rem", margin:0}}>{digitalPersonData.sub_title}</h4>
                <p style={{fontSize:"1rem", lineHeight:"1.5rem"}}>{digitalPersonData.info}</p>
                <div className='banner_buttons' style={{display:"block"}}>
                    <button className='refinancing_btn'>{digitalPersonData.btn}</button>
                </div>
            </div>
            <div>
                <img style={{width:"100%", height:"100%"}} src={"/assets/images/digital.png"} alt="banner" />
            </div>
        </section>
    );
};

export default DigitalPersonal;