import React from 'react';

const ProcessStep = ({process}) => {
    return (
        <div>
            <div>
                image
            </div>
            <div>
                <h3>{process.title}</h3>
                <div>
                    {
                        process.details.map((para,idx) => <p style={{maxWidth:"100%"}} key={`para_article_${idx}`}>{para}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProcessStep;