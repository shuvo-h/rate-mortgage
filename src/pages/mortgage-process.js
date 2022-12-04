import React from 'react';
import Layout from '../components/Layout/layout';
import Process from '../components/MortgageProcess/Process';
import ProcessDiscalimer from '../components/MortgageProcess/ProcessDiscalimer';
import ProcessHeader from '../components/MortgageProcess/ProcessHeader';

const MortgageProcess = () => {
    return (
        <Layout className='container'>
            <ProcessHeader />
            <Process />
            <ProcessDiscalimer />
        </Layout>
    );
};

export default MortgageProcess;