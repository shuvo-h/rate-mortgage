import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { RightArrow } from '../../../utils/icons/Arrows';
import SearchIcon from '../../../utils/icons/SearchIcon';

import {nav_container,nav_middle, nav_middle_items,  nav_middle_title, nav_childs_wrapper, nav_childs, nav_child_link, nav_sub, nav_right,get_start_btn,search_icon} from "./navbar.module.css";


export const navMiddle = [
    {
        name:"Current rates",
        url:"/mortgage-rates",
    },
    {
        name:"Mortgages",
        url:"/",
        childs: [
            {
                name:"Mortgage Overview", url:"", 
                sub_childs:[
                    {name:"Mortgage news", url:"",},
                    {name:"Mortgage rates today", url:"",},
                    {name:"Mortgage pre-approval", url:"",},
                    {name:"Mortgage propcess", url:"",},
                    {name:"Mortgage calculator", url:"",},
                ]
            },
            {
                name:"Refinance", url:"", 
                sub_childs:[
                    {name:"Cash-out refinance", url:"",},
                ]
            },
        ]
    },
    
    {
        name:"Learn options",
        url:"/",
        childs: [
            {
                name:"Fixed Loans", url:"", 
                sub_childs:[
                    {name:"15-years fixed loans", url:"",},
                    {name:"30-years fixed loans", url:"",},
                ]
            },
            {
                name:"ARM Loans", url:"", 
                sub_childs:[
                    {name:"5-years ARM loans", url:"",},
                    {name:"7-years ARM loans", url:"",},
                    {name:"10-years ARM loans", url:"",},
                ]
            },
            {name:"FHA loans", url:"", },
            {name:"Interest only loans", url:"", },
            {name:"VA loans", url:"", },
            {name:"Jumbo loans", url:"", },
            {name:"Personal loans", url:"", },
            {name:"HELOC", url:"", },
        ]
    },
    {
        name:"Mortgage tools",
        url:"/",
        childs: [
            {
                name:"Closing cost calculator", url:"", 
                sub_childs:[
                    {name:"Closing cost calculator", url:"",},
                    {name:"Refinance calculator", url:"",},
                    {name:"Affordability calculator", url:"",},
                    {name:"Extra payment calculator", url:"",},
                    {name:"Points calculator", url:"",},
                ]
            },
            {name:"Home valuation tool", url:"",},
            {name:"House market research", url:"",},
        ]
    },
    
]

const navRight = [
    {name:"Get started", url:""},
    {name:"(886) 934-721", url:""},
    {name:"Log in", url:""},
    {name:"Espanol", url:""},
]



console.log(nav_container);
const Navbar = () => {
    return (
        <nav className={`container ${nav_container} d-none d-lg-flex`}>
            <div>
                <StaticImage src='../../../images/Home_img/granteeIcon.png' alt='logo' width={150} />
            </div>
            <div className={`${nav_middle}`}>
                {
                    navMiddle.map(navItem => <div className={nav_middle_items} key={navItem.name}>
                        <Link to={navItem.url} className={`text-decoration-none text-black`} >
                            <span className={nav_middle_title}>
                                {navItem.name} 
                                {navItem.childs?.length && <span > <RightArrow width={10} height={10} /> </span>}
                            </span>
                        </Link>
                        {
                            navItem.childs && <div className={nav_childs_wrapper}>
                                <div className={nav_childs}>
                                    {
                                        navItem.childs && navItem.childs?.map(childNav => <div className={"nav_child"}  key={childNav.name}>
                                            <Link className={`${"link_style"} ${nav_child_link}`} to={childNav.url}>{childNav.name}</Link>
                                            <div className={"nav_subs"}>
                                                {
                                                    childNav.sub_childs && childNav.sub_childs?.map(subChild =><Link className={`${"link_style"} ${nav_child_link} ${nav_sub}`} to={subChild.url} key={subChild.name}>{subChild.name}</Link>)
                                                }
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                        
                    </div>)
                }
            </div> 


            <div className={`${nav_middle} ${nav_right}`}>
                <Link className={`link_style ${get_start_btn}`} to={""}>Get started</Link>
                {
                    navRight.map(navItem => <Link className={"link_style"} to={navItem.url} key={navItem.name}>{navItem.name}</Link>)
                }
                <Link className={`link_style ${search_icon}`} to={""}><SearchIcon></SearchIcon></Link>
            </div>

        </nav>
    );
};

export default Navbar;