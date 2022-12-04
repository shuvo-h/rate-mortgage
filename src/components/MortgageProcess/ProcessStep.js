import React from 'react';

const ProcessStep = ({process}) => {
    return (
        <div>
            <h3>{process.title}</h3>
            <div>
                {
                    process.paragraphs.map((para,idx) => <p style={{maxWidth:"100%"}} key={`para_article_${idx}`}>{para}</p>)
                }
            </div>
        </div>
    );
};

export default ProcessStep;