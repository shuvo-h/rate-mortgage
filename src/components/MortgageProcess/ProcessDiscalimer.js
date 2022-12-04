import React from 'react';

const ProcessDiscalimer = ({disclaimer}) => {
    return (
        <section>
            {
                disclaimer.map((para,idx)=><p key={`idp_${idx}`}>{para}</p>)
            }
            <h1>ProcessDiscalimer</h1>
        </section>
    );
};

export default ProcessDiscalimer;