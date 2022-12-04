import React from 'react';

const Cachet = ({cachet}) => {
    return (
        <div>
            <div>image</div>
            <h3>{cachet.title}</h3>
            <p>{cachet.description}</p>
        </div>
    );
};

export default Cachet;