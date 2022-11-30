import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useElementVisiable from '../../../hooks/useElementVisiable';
import { DownArrow, UpArrow } from '../../../utils/icons/Arrows';
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
    
    const {elementRef,isVisiable,setIsVisiable,handleClickInSideElement} = useElementVisiable(false);
    console.log(isVisiable);
    return (
        <section className="container">
            <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>
                How home {" "}
                <span style={{position:"relative",}} ref={elementRef} onClick={handleClickInSideElement}>
                    <span style={{cursor:"pointer", color:"#6495ED"}}>purchases</span>
                    {
                        isVisiable &&  <span style={{position:"absolute", fontSize:"18px", fontWeight:400,top:"65px", left:"0", lineHeight:"30px", border:"1px solid skyblue", borderRadius:"5px"}}>
                            <NavLink style={{display:"block", textDecoration:"none", padding:"8px"}} to={""} >Purchase</NavLink>
                            <NavLink style={{display:"block", textDecoration:"none", padding:"8px"}} to={""} >Refinance</NavLink>
                        </span>
                    }
                </span> 
                {" "}
                <span style={{position:"relative", width:"20px", height:"30px", display:"inline-block"}}>
                    <span style={{position:"absolute", top:"-28px"}}><DownArrow ></DownArrow></span>
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