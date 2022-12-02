import React from 'react';

const MortgageCard = ({mortgage}) => {
    return (
        <div className='col-6 col-md-3'>
            <div className='mortgage_card d-flex flex-column justify-content-center'>
                <div>{mortgage.icon}</div>
                <div>
                    <h4>{mortgage.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default MortgageCard;