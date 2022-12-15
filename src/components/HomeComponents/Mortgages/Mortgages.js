import { Link } from 'gatsby';
import React from 'react';
import { ActiveServiceFlagIcon, CreditHistoryIcon, HomeBuyerIcon, HomeOwnerCashIcon } from '../../../utils/icons/HomePageIcons';
import MortgageCard from './MortgageCard';


const mortgageData = {
    title: "Find a mortgage to fit your unique needs",
    viewBtn : "View all mortgage options",
    info:"Tell us about yourself.",
    mortgages: [
        {icon: <ActiveServiceFlagIcon width={50} height={50} />, title:"I am an active service member",url:"/va-loans"},
        {icon: <HomeBuyerIcon width={50} height={50} />, title:"I am a first-time home-buyer",url:"/buying-a-house"},
        {icon: <CreditHistoryIcon width={50} height={50}  />, title:"I have a poor credit history",url:"/resources/buying-a-home-with-bad-credit"},
        {icon: <HomeOwnerCashIcon width={50} height={50}  />, title:"I am a homeowner looking for cash",url:"/cash-out-refinance"},
    ]
}

const Mortgages = () => {
    return (
        <section className="container my-5">
            <div className='d-flex flex-wrap justify-content-between my-4'>
                <div >
                    <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{mortgageData.title}</h2>
                    <p style={{fontSize:"20px"}}>{mortgageData.info}</p>
                </div>
                    <Link className={"mt-3 text-decoration-none text-end"} style={{ color:"#6495ED", fontSize:"20px", fontWeight:600}} to='/'>{mortgageData.viewBtn}</Link>
            </div>

            <div className='row g-4'>
                {
                    mortgageData.mortgages.map((mortgage,idx) =><MortgageCard mortgage={mortgage}  key={idx}></MortgageCard>)
                }
            </div>
            <ActiveServiceFlagIcon width={50} height={50} />
        </section>
    );
};

export default Mortgages;