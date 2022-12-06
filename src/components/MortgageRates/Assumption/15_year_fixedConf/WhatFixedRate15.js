import React from 'react';

const SimilarRenderer = ({data}) => {
    return (
        <section>
            <h1>{data.title}</h1>
            <div>
                {
                    data.list.map(item => <p key={item}>{item}</p>)
                }
            </div>
        </section>
    );
};

export default SimilarRenderer;