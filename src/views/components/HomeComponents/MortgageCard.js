import React from 'react';

const MortgageCard = ({mortgage}) => {

    return (
        <div>
            <div className='mortgage_card'>
                <div>(icon)</div>
                <div>
                    <h4>{mortgage.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default MortgageCard;