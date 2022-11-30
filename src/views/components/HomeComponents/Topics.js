import React from 'react';
import { ActiveServiceFlagIcon, BeforeBuyTipsIcon, BuyHomeTipIcon, CreditCardIcon, FirstTimeBuyerTipIcon, HomeOwnerCashIcon, HomeValueIcon, MortgageProcessIcon } from '../../../utils/icons/HomePageIcons';
import Topic from './Topic';

const topics = [
    {icon: <BuyHomeTipIcon width={40} height={40} />, title:"Buy a home tips"},
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
        <section className="container">
            <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>Popular topics</h2>
            <div className='row  g-4  align-items-center'>
                <div className='col-12 col-lg-6 '>
                    <div className='row g-2 g-md-4'>
                        {
                            topics.map(topic => <Topic topic={topic} key={topic.title}></Topic>)
                        }
                    </div>
                </div>
                <div className='col-12 col-lg-6 order-sm-first order-lg-last '>
                    <img className='w-100' src={"/assets/images/topic.png"} alt="topics" />
                </div>
            </div>
        </section>
    );
};

export default Topics;