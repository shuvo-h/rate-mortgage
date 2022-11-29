import React, { useState } from 'react';
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
    const [isOpen,setIsOpen] = useState(false);
    return (
        <section className="container">
            <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>
                How home {" "}
                <span style={{position:"relative",}}>
                    <span style={{cursor:"pointer", color:"#6495ED"}} onClick={()=>setIsOpen(!isOpen)}>purchases</span>
                    {
                        isOpen &&  <span style={{position:"absolute", fontSize:"18px", fontWeight:400,top:"60px", left:"0", lineHeight:"30px"}}>
                            <p style={{margin:0}}>Purchase</p>
                            <p style={{margin:0}}>refinance</p>
                        </span>
                    }
                </span> 
                {" "} work
            </h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}}>
                {
                    steps.map(step =><Step step={step} totalSteps={steps.length} key={step.number}></Step>)
                }
            </div>
        </section>
    );
};

export default PurchaseWork;