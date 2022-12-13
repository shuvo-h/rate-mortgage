import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { ActiveServiceFlagIcon, BeforeBuyTipsIcon, BuyHomeTipIcon, CreditCardIcon, FirstTimeBuyerTipIcon, HomeOwnerCashIcon, HomeValueIcon, MortgageProcessIcon } from '../../../utils/icons/HomePageIcons';
import Topic from './Topic';
import {digital_personel_img} from "../../index.module.css";



const topics = [
    {icon: <BuyHomeTipIcon width={40} height={40} />, title:"Buy a home tips", url:"/resources/home-buying-advice"},
    {icon: <HomeOwnerCashIcon width={40} height={40} />, title:"Refinance tips",url:"/resources/home-refinancing-tips"},
    {icon: <MortgageProcessIcon width={40} height={40} />, title:"Mortgage process",url:"/resources/mortgage-process-resources"},
    {icon: <BeforeBuyTipsIcon width={40} height={40} />, title:"Before you buy tips",url:"/resources/top-things-not-to-do-before-buying-a-home"},
    {icon: <HomeValueIcon width={40} height={40} />, title:"Home value",url:"/home-valuation"},
    {icon: <ActiveServiceFlagIcon width={40} height={40} />, title:"Military options",url:"/va-loans"},
    {icon: <CreditCardIcon width={40} height={40} />, title:"Less-than-perfect credit",url:"/resources/buying-a-home-with-bad-credit"},
    {icon: <FirstTimeBuyerTipIcon width={40} height={40} />, title:"First-time homebuyer tips",url:"/resources/first-home-buyers"},
]


const topic_QL = graphql`
    query topic_QL {
        topic_img: file(name: {eq: "popular-topic"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
    }

`;


const Topics = () => {
    const {topic_img} = useStaticQuery(topic_QL);
    // console.log(topic_img);

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
                    <div className={digital_personel_img}>
                        <GatsbyImage image={getImage(topic_img.childImageSharp)} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topics;