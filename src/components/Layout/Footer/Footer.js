import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { FBicon, InstagramIcon, LinkedINIcon, TwitterIcon, YoutubeIcon } from '../../../utils/icons/SocialIcons';
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
    {name: <YoutubeIcon width={30}  height={30} />, url:"",},
    {name: <InstagramIcon width={30}  height={30} />, url:"",},
    {name: <LinkedINIcon width={30}  height={30} /> , url:"",},
    {name: <TwitterIcon  width={30}  height={30} />, url:"",},
    {name: <FBicon width={30}  height={30} />, url:"",},
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
                            <h5 style={{margin:"10px"}}>{footerItem.title}</h5>
                            <div>
                                {
                                    footerItem.data.map((footerColumn,idx) =><FooterColumn footerColumn={footerColumn} key={idx}></FooterColumn>)
                                }
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <h5 className='mb-0' style={{margin:"10px"}}>Connect with us</h5>
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
                        shortedLinks.map((shortLink,idx) => <Link className='text-black text-decoration-none' style={{fontWeight:400}} to={shortLink.url} key={idx}>{shortLink.name}{idx !== shortedLinks.length -1 ? " | ":""}</Link>)
                    }
                </div>
                <div>
                    <StaticImage src='../../../images/Home_img/granteeIcon.png' width={100} alt="granteeIcon" />
                </div>
            </div>
        </div>
    );
};

export default Footer;