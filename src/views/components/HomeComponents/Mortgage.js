import React from 'react';
import { NavLink } from 'react-router-dom';
import { ActiveServiceFlagIcon,HomeBuyerIcon,CreditHistoryIcon,HomeOwnerCashIcon } from '../../../utils/icons/HomePageIcons';
import MortgageCard from './MortgageCard';

const mortgageData = {
    title: "Find a mortgage to fit your unique needs",
    viewBtn : "View all mortgage options",
    info:"Tell us about yourself.",
    mortgages: [
        {icon: <ActiveServiceFlagIcon width={50} height={50} />, title:"I am an active service member"},
        {icon: <HomeBuyerIcon width={50} height={50} />, title:"I am a first-time home-buyer"},
        {icon: <CreditHistoryIcon width={50} height={50}  />, title:"I have a poor credit history"},
        {icon: <HomeOwnerCashIcon width={50} height={50}  />, title:"I am a homeowner looking for cash"},
    ]
}



const Mortgage = () => {
    return (
        
        <section style={{marginTop:"2rem", marginBottom:"4rem"}} className="container">
            <div style={{display:"grid", gridTemplateColumns:"2fr 1fr", alignItems:"center"}}>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{mortgageData.title}</h2>
                <NavLink style={{ color:"#6495ED", fontSize:"20px",textAlign:"right",textDecoration:"none", fontWeight:600}} to='/'>{mortgageData.viewBtn}</NavLink>
            </div>
            <p style={{fontSize:"20px"}}>{mortgageData.info}</p>

            


            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)", gap:"2rem"}}>
                {
                    mortgageData.mortgages.map((mortgage,idx) =><MortgageCard mortgage={mortgage}  key={idx}></MortgageCard>)
                }
            </div>
        </section>
    );
};

export default Mortgage;