import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import SearchIcon from '../../../../utils/icons/SearchIcon';


const navMiddle = [
    {
        name:"current rates",
        url:"/",
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

const NavBar = () => {

    return (
        <nav className='container nav_container'>
            <div>
                <img style={{width:"150px"}} src={"/assets/images/granteeIcon.png"} alt="granteeIcon" />
            </div>
            <div className='nav_middle'>
                {
                    navMiddle.map(navItem => <div className='nav_middle_items' key={navItem.name}>
                        <NavLink className={"link_style"} to={navItem.url}>{navItem.name}</NavLink>
                        {
                            navItem.childs && <div className={'nav_childs_wrapper'}>
                                <div className='nav_childs'>
                                    {
                                        navItem.childs && navItem.childs?.map(childNav => <div className={"nav_child"}  key={childNav.name}>
                                            <NavLink className={"link_style nav_child_link"} to={childNav.url}>{childNav.name}</NavLink>
                                            <div className='nav_subs'>
                                                {
                                                    childNav.sub_childs && childNav.sub_childs?.map(subChild =><NavLink className={"link_style nav_child_link nav_sub"} to={subChild.url} key={subChild.name}>{subChild.name}</NavLink>)
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
            <div className='nav_middle nav_right'>
                <NavLink className={"link_style get_start_btn"} to={""}>Get started</NavLink>
                {
                    navRight.map(navItem => <NavLink className={"link_style"} to={navItem.url} key={navItem.name}>{navItem.name}</NavLink>)
                }
                <NavLink className={"link_style search_icon"} to={""}><SearchIcon></SearchIcon></NavLink>
            </div>
        </nav>
    );
};


export default NavBar;

