import React from 'react';
import { NavLink } from 'react-router-dom';

const Step = ({step,totalSteps}) => {
    return (
        <div>
            <p><strong>Step {step.number}/{totalSteps}</strong></p>
            <h2>{step.title}</h2>
            <p>{step.info}</p>
            <p><NavLink style={{color:"#6495ED", textDecoration:"none"}} href='/'>{step.question}</NavLink></p>
        </div>
    );
};

export default Step;