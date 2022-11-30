import React from 'react';
import { NavLink } from 'react-router-dom';
import { BadgeAwardIcon, BranchLocationIcon, DollarsIcon } from '../../../utils/icons/HomePageIcons';
import Paving from './Paving';

const pavingsData = [
    {icon: <DollarsIcon width={35} height={35} />, amount: 70, sign:"$", unit:"B", info:"unded loans in 2021",btn:"our story", url:"/"},
    {icon: <BadgeAwardIcon width={35} height={35} />, amount: 96, sign:"", unit:"%", info:"Customer Satisfaction Score*",btn:"Why you’ll love us", url:"/"},
    {icon: <BranchLocationIcon width={35} height={35} />, amount: 500, sign:"$", unit:"+", info:"Branches serving all 50 states",btn:"Find a branch near you", url:"/"},
]

const Pavings = () => {
    return (
        <section className="container my-5">
            <div>
                <h2 className='fs-1 my-5'>Paving the way since Y2K</h2>
                <div className='row g-3 text-center'>
                    {
                        pavingsData.map((paving,idx) => <Paving paving={paving} idx={idx} key={paving.info}></Paving>)
                    }
                </div>
            </div>
            
            {/* <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem", padding:"3rem"}}> */}
            <div className='d-md-flex align-items-center p-3'>
                <img className='d-block m-auto m-md-0' style={{width:"150px"}} src={"/assets/images/satisfaction.png"} alt="satisfaction" />
                <div className='ms-4'>
                    <p  style={{display:"inline", color:"grey"}}>100% satisfaction guaranteed, only from Guaranteed Rate. {" "}</p>
                    <NavLink style={{color:"grey"}} href="/">view details</NavLink>
                </div>
            </div>
            <p style={{fontSize:"14px"}}>*96% Customer Satisfaction: Data Source: Guaranteed Rate’s Client Satisfaction Surveys (Averaged 2021)</p>
        </section>
    );
};

export default Pavings;