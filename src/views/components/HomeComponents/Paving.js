import React from 'react';

const Paving = ({paving,idx}) => {
    return (
        <div style={{borderLeft: (idx === 1 || idx === 2) ? "1px solid lightgrey" :""}}>
            <div>
                <div>{paving.icon}</div>
                <output style={{fontSize:"50px", fontWeight:700}}>
                    <span>{paving.sign}</span>
                    {paving.amount}
                    <span>{paving.unit}</span>
                </output>
                <p style={{fontSize:"25px"}}>{paving.info}</p>
                <div>
                    <a style={{textDecoration:"none", color:"#6495ED", fontSize:"22px",fontWeight:700}} href={paving.url}>{paving.btn}</a>
                </div>
            </div>
        </div>
    );
};

export default Paving;