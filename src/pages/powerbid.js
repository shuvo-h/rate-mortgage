import React from 'react';
import Layout from '../components/Layout/layout';
import Cachets from '../components/PowerbidCmp/competeCachet/Cachets';
import FreeGuidBanner from '../components/PowerbidCmp/FreeGuidBanner';
import HowWorkBanner from '../components/PowerbidCmp/HowWorkBanner';
import PowerbidBanner from '../components/PowerbidCmp/PowerbidBanner';

const Powerbid = () => {
    return (
        <Layout>
            <PowerbidBanner />
            <div>
                <p>Want to see what you can afford first? Try our mortgage calculator Try our mortgage calculator</p>
            </div>
            <Cachets />
            <HowWorkBanner />
            <FreeGuidBanner />
        </Layout>
    );
};

export default Powerbid;