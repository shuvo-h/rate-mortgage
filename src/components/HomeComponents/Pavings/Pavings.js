import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { BadgeAwardIcon, BranchLocationIcon, DollarsIcon } from '../../../utils/icons/HomePageIcons';
import Paving from './Paving';



const pavingsData = [
    {icon: <DollarsIcon width={35} height={35} />, amount: 70, sign:"$", unit:"B", info:"unded loans in 2021",btn:"our story", url:"/"},
    {icon: <BadgeAwardIcon width={35} height={35} />, amount: 96, sign:"", unit:"%", info:"Customer Satisfaction Score*",btn:"Why you’ll love us", url:"/"},
    {icon: <BranchLocationIcon width={35} height={35} />, amount: 500, sign:"$", unit:"+", info:"Branches serving all 50 states",btn:"Find a branch near you", url:"/"},
]


const paving_QL = graphql`
    query paving_QL {
        satisfactionImg: file(name: {eq: "satisfaction"}) {
            name
            childImageSharp {
                gatsbyImageData
            }
        }
    }

`;


const Pavings = () => {
    const {satisfactionImg} = useStaticQuery(paving_QL);
    // console.log(satisfactionImg);
    
    return (
        <section className="container my-5">
            <div>
                <h1 className='fs-1 my-5 text-center'>Paving the way since Y2K</h1>
                <div className='row g-3 my-5 text-center'>
                    {
                        pavingsData.map((paving,idx) => <Paving paving={paving} idx={idx} key={paving.info}></Paving>)
                    }
                </div>
            </div>
            
            
            <div className='d-md-flex align-items-center justify-content-center my-5 p-3'>
                <div className={"text-center my-3"}>
                        <GatsbyImage style={{maxWidth:"200px"}} image={getImage(satisfactionImg.childImageSharp)} alt='' />
                </div>
                <div className='ms-4'>
                    <p  style={{display:"inline", color:"grey"}}>100% satisfaction guaranteed, only from Guaranteed Rate. {" "}</p>
                    <Link className='text-decoration-none' style={{fontWeight:400}} style={{color:"grey"}} to="/">view details</Link>
                </div>
            </div>
            <p style={{fontSize:"14px"}}>*96% Customer Satisfaction: Data Source: Guaranteed Rate’s Client Satisfaction Surveys (Averaged 2021)</p>
        </section>
    );
};

export default Pavings;