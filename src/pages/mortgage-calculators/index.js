import React from 'react';
import Layout from '../../components/Layout/layout';
import CalcFAQlist from '../../components/MortgageCalsCmp/mortgageCals/CalcFAQlist';
import MortgageCalculator from '../../components/MortgageCalsCmp/mortgageCals/MortgageCalculator';
import OptionsTools from '../../components/MortgageCalsCmp/mortgageCals/OptionsTools';

const OptionsAndPricingTools = {
    title:"Homebuying options and pricing tools",
    introduction:[],
    pricingTools:[
        {
            image:"",
            title:"Mortgage application",
            url:""
        },
        {
            image:"",
            title:"Today's rates",
            url:""
        },
        {
            image:"",
            title:"Loan options",
            url:""
        },
    ],
    conclusion:[
        "To get a better sense of the total costs of buying a home, use our home mortgage calculator and figure out what your future mortgage payments will be.* Our home loan calculator accounts for all the essential conditions that will affect mortgage costs including loan type, loan amount, down payment, interest rate and more. Note: The calculator only provides preliminary estimates based on information you enter, and such factors as current interest rates, credit score and a debt-to-income ratio (DTI) above 43% may yield different pricing results."
    ],
}



const MortgageCalculators = () => {
    return (
        <Layout className='container'>
            <h1>Mortgage Calculator</h1>
            <MortgageCalculator />
            <OptionsTools OptionsAndPricingTools={OptionsAndPricingTools} />
            <h2>Get personalized rate estimates in as little as three minutes.</h2>
            <button>Apply now</button>
            <div>Image</div>
            <CalcFAQlist />
        </Layout>
    );
};

export default MortgageCalculators;