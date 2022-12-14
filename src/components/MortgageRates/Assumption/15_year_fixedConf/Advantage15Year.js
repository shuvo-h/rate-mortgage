import React from 'react';

import CustomAccordion from './CustomAccordion';

const Advantage15Year = ({adDis_vantage, idString}) => {
    return (
        <section id={idString}>
            <h1>{adDis_vantage.title}</h1>
            <p>{adDis_vantage.introduction}</p>
            <div >
                {
                    adDis_vantage.terms.map((term,idx) =><div key={idx}>
                        {/* <h6>{term.title}</h6>
                        {
                            term.answer.map((ans,index) =><p key={index+500}>{ans}</p>)
                        } */}

                        <CustomAccordion 
                            title={term.title}
                            accordionIndex={idx}
                            content={term.answer.map((ans,index) =><p key={index+500}>{ans}</p>)}
                        />
                        
                    </div>)
                }
            </div>
            <div style={{height: "30px"}}></div>
        </section>

    );
};

export default Advantage15Year;