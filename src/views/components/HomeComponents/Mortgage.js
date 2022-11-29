import React from 'react';

const mortgageData = {
    title: "Find a mortgage to fit your unique needs",
    viewBtn : "View all mortgage options",
    info:"Tell us about yourself.",
    mortgages: [
        {icon:"Flag Icon", title:"I am active service member"},
        {icon:"Flag Icon", title:"I am active service member"},
        {icon:"Flag Icon", title:"I am active service member"},
        {icon:"Flag Icon", title:"I am active service member"},
    ]
}

const Mortgage = () => {
    return (
        
        <section className="container">
            <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{mortgageData.title}</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}}>
                {
                    steps.map(step =><Step step={step} totalSteps={steps.length} key={step.number}></Step>)
                }
            </div>
        </section>
    );
};

export default Mortgage;