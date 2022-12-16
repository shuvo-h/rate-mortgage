import React from 'react';
import Layout from '../../components/Layout/layout';

import AdjustableMortage from '../../components/homeLoans/AdjustableMortage/AdjustableMortage';
import FaqList from '../../components/homeLoans/AdjustableMortage/FaqList';
import WhatIsAdjustableRate from '../../components/homeLoans/AdjustableMortage/WhatIsAdjustableRate';
import HowArmWorks from '../../components/homeLoans/AdjustableMortage/HowArmWorks';
import TypesOfAdjustable from '../../components/homeLoans/AdjustableMortage/TypesOfAdjustableRate';
import UnderstandingMargin from '../../components/homeLoans/AdjustableMortage/UnderstandingMargin';
import ArmsVsFixedRate from '../../components/homeLoans/AdjustableMortage/ArmsVsFixedRate';



const AdjustableRateMortgageArm = () => {
    return (
        <Layout className='container'>
            <AdjustableMortage />

            <FaqList />

            <WhatIsAdjustableRate />

            <HowArmWorks />

            <TypesOfAdjustable />

            <UnderstandingMargin />

            <ArmsVsFixedRate />
            
        </Layout>
    );
};

export default AdjustableRateMortgageArm;