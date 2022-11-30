import React from 'react';

// import bannerImg from "/public/assets/images/banner_img.png";

const bannerData = {
    title: "Fast pre-approval is the best pre-approval",
    info:"Guaranteed Rate offers a digital pre-approval letter with no obligation. Speak with a loan officer to receive your letter.",
    purchase_btn: "I'm purchasing",
    refinancing_btn: "I'm refinancing",
    report_line:"Scotsman Guide 2021 Top Dollar Volume Report"
}

const Banner = () => {
    return (
        <section style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}} className="base_container">
            <div>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{bannerData.title}</h2>
                <p style={{fontSize:"1.5rem", lineHeight:"2rem"}}>{bannerData.info}</p>
                <div className='banner_buttons'>
                    <button className='purchase_btn'>{bannerData.purchase_btn}</button>
                    <button className='refinancing_btn'>{bannerData.refinancing_btn}</button>
                </div>
                <p style={{}}>{bannerData.report_line}</p>
            </div>
            <div>
                <img src={"/assets/images/banner_img.png"} alt="banner" />
            </div>
        </section>
    );
};

export default Banner;