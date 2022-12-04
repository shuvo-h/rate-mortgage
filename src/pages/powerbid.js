import React from 'react';
import Layout from '../components/Layout/layout';
import Cachets from '../components/PowerbidCmp/competeCachet/Cachets';
import FreeGuidBanner from '../components/PowerbidCmp/FreeGuidBanner';
import HowWorkBanner from '../components/PowerbidCmp/HowWorkBanner';
import PowerbidBanner from '../components/PowerbidCmp/PowerbidBanner';

const Powerbid = () => {
    return (
        <Layout className='container'>
            <h1>Put our power behind your bid.</h1>
            <PowerbidBanner />
            <Cachets />
            <HowWorkBanner />
            <FreeGuidBanner />
        </Layout>
    );
};

export default Powerbid;