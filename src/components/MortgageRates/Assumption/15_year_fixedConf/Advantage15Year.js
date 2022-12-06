import React from 'react';

const Advantage15Year = ({adDis_vantage}) => {
    return (
        <section>
            <h1>{adDis_vantage.title}</h1>
            <p>{adDis_vantage.introduction}</p>
            <div>
                {
                    adDis_vantage.terms.map((term,idx) =><div key={idx}>
                        <h6>{term.title}</h6>
                        {
                            term.answer.map((ans,index) =><p key={index+500}>{ans}</p>)
                        }
                    </div>)
                }
            </div>
            <div></div>
        </section>

    );
};

export default Advantage15Year;