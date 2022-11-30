
import React from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramIcon, YoutubeIcon,LinkedINIcon, FBicon, TwitterIcon } from '../../../../utils/icons/SocialIcons';
import FooterColumn from './FooterColumn';

const footerMortgage = [
    {name:"Sign in to your account", url:""},
    {name:"Pay your mortgage", url:""},
    {name:"Contact us", url:""},
]
const granteeData = [
    {name:"About us", url:""},
    {name:"Careers", url:""},
    {name:"Press", url:""},
    {name:"Insurance", url:""},
    {name:"HELOC", url:""},
]
const careerData = [
    {name:"Loan office", url:""},
    {name:"Operations", url:""},
    {name:"Tech", url:""},
    {name:"All open positions", url:""},
]
const websiteData = [
    {name:"Graunteed Rate Insurance", url:""},
    {name:"Owning", url:""},
    {name:"Ravenswood Title", url:""},
    {name:"Agent Advantage", url:""},
]
const contactIcons = [
    {name: <YoutubeIcon  />, url:"",},
    {name: <InstagramIcon />, url:"",},
    {name: <LinkedINIcon /> , url:"",},
    {name: <TwitterIcon />, url:"",},
    {name: <FBicon />, url:"",},
]

const footerData = [
    {title:"Your Mortgage", data:footerMortgage},
    {title:"Guaranteed Rate", data:granteeData},
    {title:"Careers", data:careerData},
    {title:"Websites", data:websiteData, },
    // {title:"Connect with us", data:contactIcons, type:"icon"},
]

const shortedLinks = [
    {name:"Accessibility", url:"/"},
    {name:"Licensing ", url:"/"},
    {name:"Notice to Vendors", url:"/"},
    {name:"Privacy Policies", url:"/"},
    {name:"SMS Terms", url:"/"},
    {name:"Terms of Use", url:"/"},
    {name:"NMLS Consumer Access", url:"/"},
]

const Footer = () => {
    return (
        <div className='container'>
            <div className='footer_items_container'>
                <div className='footer_items'>
                    {
                        footerData.map(footerItem =><div key={footerItem.title}>
                            <h4 style={{margin:"10px"}}>{footerItem.title}</h4>
                            <div>
                                {
                                    footerItem.data.map((footerColumn,idx) =><FooterColumn footerColumn={footerColumn} key={idx}></FooterColumn>)
                                }
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <h4 style={{margin:"10px"}}>Connect with us</h4>
                    <div className='d-flex flex-wrap'>
                        {
                            contactIcons.map((footerColumn,idx) =><FooterColumn footerColumn={footerColumn} key={idx}></FooterColumn>)
                        }
                    </div>
                </div>
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