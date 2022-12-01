import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon, TelephoneIcon, UserIcon } from '../../../../utils/icons/DrawerNavIcons';
import { navMiddle } from './NavBar';


const navRightDrawer = [
    {name: <TelephoneIcon />, url:""},
    {name: <UserIcon />, url:""},
]


const NavbarDrawer = () => {
    const [isDrawerOpen,setIsDrawerOpen] = useState(true);
    const [currentChilds,setCurrentChilds] = useState([]);

    console.log(currentChilds);

    return (
        <nav className='nav_container nav_drawer_container'>
            <div className='nav-toggle'>
                <button onClick={()=>setIsDrawerOpen(!isDrawerOpen)}>+</button>
            </div>
            <div>
                <LogoIcon width={40} height={40} />
            </div>
            
            {
                isDrawerOpen && <div className='nav_drawer_middle' style={{"--drawer_open_shade":"rgba(0,0,0,0.5)"}}>
                    <div className='nav_drawer_middle_wrapper'>
                        <div>
                            {
                                currentChilds.length 
                                ?  <button onClick={()=>setCurrentChilds([])}>Close</button>
                                :  <input type="text" placeholder='Search..' />
                            }
                        </div>
                        
                        <div>
                            {
                                !currentChilds.length && navMiddle.map(navItem => <div className='nav_drawer_middle_items' key={navItem.name}>
                                    <span onClick={()=>setCurrentChilds(navItem.childs ?? [])}>{navItem.name} <span >></span></span>
                                </div>)
                            }
                        </div>
                        <div>
                            {
                                !!currentChilds.length && currentChilds.map(childNav => <div className={"nav_child"}  key={childNav.name}>
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
                </div>
            }
            
 

            
            <div className='nav_middle nav_right'>
                <NavLink className={"link_style get_start_btn"} to={""}>Get started</NavLink>
                {
                    navRightDrawer.map(navItem => <NavLink className={"link_style"} to={navItem.url} key={navItem.name}>{navItem.name}</NavLink>)
                }
                {/* <NavLink className={"link_style search_icon"} to={""}><SearchIcon></SearchIcon></NavLink> */}
            </div>
            
        </nav>
    );
};

export default NavbarDrawer;