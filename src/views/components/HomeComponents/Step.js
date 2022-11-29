import React from 'react';

const Step = ({step,totalSteps}) => {
    return (
        <div>
            <p><strong>Step {step.number}/{totalSteps}</strong></p>
            <h2>{step.title}</h2>
            <p>{step.info}</p>
            <p><a style={{color:"#6495ED", textDecoration:"none"}} href='/'>{step.question}</a></p>
        </div>
    );
};

export default Step;