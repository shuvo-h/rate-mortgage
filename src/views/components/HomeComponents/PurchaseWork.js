import React from 'react';
import Step from './Step';

const steps = [
    {
        number: 1,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
    {
        number: 2,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
    {
        number: 3,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
    {
        number: 4,
        title: "Determine budget and save for a down payment",
        info:"Before you even start looking at homes for sale, it's important to determine your needs and budget. Then start saving up for that down payment.",
        question: "How much can I afford?"
    },
]

const PurchaseWork = () => {
    return (
        <section style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}} className="container">
            <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>How home purchases work</h2>
            <div>
            {
                steps.map(step =><Step step={step} totalSteps={steps.length} key={step.number}></Step>)
            }
            </div>
        </section>
    );
};

export default PurchaseWork;