import React from 'react';
import Layout from '../../../components/Layout/layout';
import Advantage15Year from '../../../components/MortgageRates/Assumption/15_year_fixedConf/Advantage15Year';
import ContentList15 from '../../../components/MortgageRates/Assumption/15_year_fixedConf/ContentList15';
import Disclosure15 from '../../../components/MortgageRates/Assumption/15_year_fixedConf/Disclosure15';
import ShortInfo from '../../../components/MortgageRates/Assumption/15_year_fixedConf/ShortInfo';
import { advantage15YearData, average15yearRate, differenceFIxed_arm, disadvantage15YearData, howFindLow15Rate, mortgage_15vs30, refinancing_vs_purchase, rightFixed15, whatAfixedRate15, whatIsGood15Fixed } from '../../../components/MortgageRates/Assumption/15_year_fixedConf/SimilarLists';
import SimilarRenderer from '../../../components/MortgageRates/Assumption/15_year_fixedConf/WhatFixedRate15';

const YearFixedConforming = () => {
    return (
        <Layout className='container'>
            <h1>15-Year Fixed Rate Mortgage UNITED STATES AVERAGE</h1>
            <div>
                <ContentList15 />
                <SimilarRenderer data={whatAfixedRate15} />
                <SimilarRenderer data={whatIsGood15Fixed} />
                <SimilarRenderer data={average15yearRate} />
                <SimilarRenderer data={howFindLow15Rate} />
                <Advantage15Year adDis_vantage={advantage15YearData} />
                <Advantage15Year adDis_vantage={disadvantage15YearData} />
                <SimilarRenderer data={mortgage_15vs30} />
                <SimilarRenderer data={differenceFIxed_arm} />
                <SimilarRenderer data={refinancing_vs_purchase} />
                <SimilarRenderer data={rightFixed15} />
                <ShortInfo />
                <Disclosure15 />
            </div>
        </Layout>
    );
};

export default YearFixedConforming;