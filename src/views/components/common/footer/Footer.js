import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterColumn from './FooterColumn';

const footerMortgage = [
    {name:"Sign in to your account", url:""},
    {name:"Pay your mortgage", url:""},
    {name:"Contact us", url:""},
]
const granteeData = [
    {name:"About us", url:""},
    {name:"Career", url:""},
    {name:"Career", url:""},
    {name:"Career", url:""},
    {name:"Career", url:""},
]
const careerData = [
    {name:"Loan office", url:""},
    {name:"Loan office", url:""},
    {name:"Loan office", url:""},
    {name:"Loan office", url:""},
]
const websiteData = [
    {name:"Graunteed Rate Insurance", url:""},
    {name:"Graunteed Rate Insurance", url:""},
    {name:"Graunteed Rate Insurance", url:""},
    {name:"Graunteed Rate Insurance", url:""},
]
const contactIcons = [
    {name:"Youtube Icon", url:"",},
    {name:"Youtube Icon", url:"",},
    {name:"Youtube Icon", url:"",},
    {name:"Youtube Icon", url:"",},
    {name:"Youtube Icon", url:"",},
]

const footerData = [
    {title:"Your Mortgage", data:footerMortgage},
    {title:"Guaranteed Rate", data:granteeData},
    {title:"Careers", data:careerData},
    {title:"Websites", data:websiteData, },
    {title:"Connect with us", data:contactIcons, type:"icon"},
]

const shortedLinks = [
    {name:"Accessibility", url:"/"},
    {name:"License", url:"/"},
    {name:"License", url:"/"},
    {name:"License", url:"/"},
    {name:"License", url:"/"},
    {name:"License", url:"/"},
]

const Footer = () => {
    return (
        <div className='container'>
            <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)"}}>
                {
                    footerData.map(footerItem =><div key={footerItem.title}>
                        <h4 style={{margin:"10px"}}>{footerItem.title}</h4>
                        <div style={{display: footerItem.type === 'icon' ? "flex" :"block"}}>
                            {
                                footerItem.data.map((footerColumn,idx) =><FooterColumn footerColumn={footerColumn} key={idx}></FooterColumn>)
                            }
                        </div>
                    </div>)
                }
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 200px"}}>
                <div style={{margin:"20px 0",}}>
                    {
                        shortedLinks.map((shortLink,idx) => <NavLink style={{color:"black", textDecoration:"none"}} to={shortLink.url} key={idx}>{shortLink.name}{idx !== shortedLinks.length -1 ? " | ":""}</NavLink>)
                    }
                </div>
                <div>
                    <img style={{width:"100%"}} src={"/assets/images/granteeIcon.png"} alt="granteeIcon" />
                </div>
            </div>
        </div>
    );
};

export default Footer;