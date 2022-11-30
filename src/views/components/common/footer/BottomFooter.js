import React from 'react';
import { NavLink } from 'react-router-dom';


const bottomFooterLinks = [
    {name:"Delaware Licensed Loan Officers", url:"/"},
    {name:"Texas consumer", url:"/"},
    {name:" Do not sell my personal information", url:"/"},
]


const BottomFooter = () => {
    return (
        <div className='container my-5 pb-5'>
            <div style={{margin:"20px 0",}}>
                {
                    bottomFooterLinks.map((shortLink,idx) => <NavLink style={{color:"black", textDecoration:"none"}} to={shortLink.url} key={idx}>{shortLink.name}{idx !== bottomFooterLinks.length -1 ? " | ":""}</NavLink>)
                }
            </div>
            <p>Please note that applications, legal disclosures, documents or other material related to Guaranteed Rate products or services promoted on this page are offered in English only. The Spanish translation of this page is for the convenience of our clients; however, not all pages are translated. If there is a discrepancy between the content of the translated page and the content of the same page in English, the English version will prevail.</p>
            <div style={{width:"120px"}}>
                <img style={{width:"100%"}} src={"/assets/images/equalHousing.png"} alt="granteeIcon" />
            </div>
            <p> &copy; 2022 Guaranteed Rate, Inc. All rights reserved.</p>
            <p style={{margin:"0"}}>NMLS License #2611 - For licensing information, go to: <NavLink style={{textDecoration:"none"}} to={"www.nmlsconsumeraccess.org"}>www.nmlsconsumeraccess.org</NavLink>.</p>
            <p style={{margin:"0"}}>Arizona Mortgage Banker License #0907078</p>
            <p>3940 N. Ravenswood Chicago, IL 60613 The company name, Guaranteed Rate, should not suggest to a consumer that Guaranteed Rate provides an interest rate guaranteed prior to an interest lock.</p>
        </div>
    );
};

export default BottomFooter;