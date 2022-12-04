import React from 'react';
import Layout from '../../components/Layout/layout';
import CalcFAQlist from '../../components/MortgageCalsCmp/mortgageCals/CalcFAQlist';
import MortgageCalculator from '../../components/MortgageCalsCmp/mortgageCals/MortgageCalculator';
import OptionsTools from '../../components/MortgageCalsCmp/mortgageCals/OptionsTools';

const MortgageCalculators = () => {
    return (
        <Layout className='container'>
            <h1>Mortgage Calculator</h1>
            <MortgageCalculator />
            <OptionsTools />
            <CalcFAQlist />
        </Layout>
    );
};

export default MortgageCalculators;