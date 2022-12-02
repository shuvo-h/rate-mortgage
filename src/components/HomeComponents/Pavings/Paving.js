import { Link } from 'gatsby';
import React from 'react';

const Paving = ({paving,idx}) => {
    return (
        <div className={`col-12 col-md-4 p-3 ${idx===1 && "pavingCard"}`}>
            <div>
                <div>{paving.icon}</div>
                <output style={{fontSize:"50px", fontWeight:700}}>
                    <span>{paving.sign}</span>
                    {paving.amount}
                    <span>{paving.unit}</span>
                </output>
                <p style={{fontSize:"25px"}}>{paving.info}</p>
                <div>
                    <Link style={{textDecoration:"none", color:"#6495ED", fontSize:"22px",fontWeight:700}} to={paving.url}>{paving.btn}</Link>
                </div>
            </div>
        </div>
    );
};

export default Paving;