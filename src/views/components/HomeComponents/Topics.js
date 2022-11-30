import React from 'react';
import { ActiveServiceFlagIcon, BeforeBuyTipsIcon, BuyHomeTipIcon, CreditCardIcon, FirstTimeBuyerTipIcon, HomeOwnerCashIcon, HomeValueIcon, MortgageProcessIcon } from '../../../utils/icons/HomePageIcons';
import Topic from './Topic';

const topics = [
    {icon: <BuyHomeTipIcon width={40} height={40} />, title:"buy a home tips"},
    {icon: <HomeOwnerCashIcon width={40} height={40} />, title:"Refinance tips"},
    {icon: <MortgageProcessIcon width={40} height={40} />, title:"Mortgage process"},
    {icon: <BeforeBuyTipsIcon width={40} height={40} />, title:"Before you buy tips"},
    {icon: <HomeValueIcon width={40} height={40} />, title:"Home value"},
    {icon: <ActiveServiceFlagIcon width={40} height={40} />, title:"Military options"},
    {icon: <CreditCardIcon width={40} height={40} />, title:"Less-than-perfect credit"},
    {icon: <FirstTimeBuyerTipIcon width={40} height={40} />, title:"First-time homebuyer tips"},
]


const Topics = () => {
    return (
        <section style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem", borderTop:"1px solid skyblue", borderBottom:"1px solid skyblue", padding:"3rem 0"}} className="base_container">
            <div>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>Popular topics</h2>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}}>
                    {
                        topics.map(topic => <Topic topic={topic} key={topic.title}></Topic>)
                    }
                </div>
            </div>
            <div>
                <img style={{width:"100%"}} src={"/assets/images/topic.png"} alt="topics" />
            </div>
        </section>
    );
};

export default Topics;