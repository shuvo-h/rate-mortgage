import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterColumn = ({footerColumn}) => {
    return (
        <div style={{margin:"10px",}}>
            <NavLink style={{textDecoration:"none", color:"black"}} to={footerColumn.url}>{footerColumn.name}</NavLink>
        </div>
    );
};

export default FooterColumn;