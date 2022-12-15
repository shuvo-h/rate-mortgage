import React, {useState} from 'react';
import Layout from '../../../components/Layout/layout';
import Advantage15Year from '../../../components/MortgageRates/Assumption/15_year_fixedConf/Advantage15Year';
import ContentList15 from '../../../components/MortgageRates/Assumption/15_year_fixedConf/ContentList15';
import Disclosure15 from '../../../components/MortgageRates/Assumption/15_year_fixedConf/Disclosure15';
import ShortInfo from '../../../components/MortgageRates/Assumption/15_year_fixedConf/ShortInfo';
import { advantage15YearData, average15yearRate, differenceFIxed_arm, disadvantage15YearData, howFindLow15Rate, mortgage_15vs30, refinancing_vs_purchase, rightFixed15, whatAfixedRate15, whatIsGood15Fixed } from '../../../components/MortgageRates/Assumption/15_year_fixedConf/SimilarLists';
import SimilarRenderer from '../../../components/MortgageRates/Assumption/15_year_fixedConf/WhatFixedRate15';
import Chart from '../../../components/chart/chart';

import {span_text, hidescroll} from "./index.module.css";

const YearFixedConforming = () => {
    const [percentage, setPercentage] = useState(0);
    const [yearLabel, setYearLabel] = useState("");

    const handleMouseMoveInChart = (yearParam, percentParama) => {
        setYearLabel(yearParam);
        setPercentage(percentParama)
    }

    return (
        <Layout className='container'>
            
            <h1>15-Year Fixed Rate Mortgage</h1>
            <span className={span_text}>UNITED STATES AVERAGE</span>

            <p>{percentage}% - {yearLabel}</p>
            <div className={hidescroll} style={{overflowX: 'scroll'}}>
                <Chart handleMouseMoveInChart={handleMouseMoveInChart} />
            </div>
            <div>
                <ContentList15 />
                <SimilarRenderer data={whatAfixedRate15} idString={"whatAfixedRate15"} />
                <SimilarRenderer data={whatIsGood15Fixed} idString={"whatIsGood15Fixed"} />
                <SimilarRenderer data={average15yearRate} idString={"average15yearRate"} />
                <SimilarRenderer data={howFindLow15Rate} idString={"howFindLow15Rate"} />
                <Advantage15Year adDis_vantage={advantage15YearData} idString={"advantage15YearData"} />
                <Advantage15Year adDis_vantage={disadvantage15YearData} idString={"disadvantage15YearData"} />
                <SimilarRenderer data={mortgage_15vs30} idString={"mortgage_15vs30"} />
                <SimilarRenderer data={differenceFIxed_arm} idString={"differenceFIxed_arm"} />
                <SimilarRenderer data={refinancing_vs_purchase} idString="refinancing_vs_purchase" />
                <SimilarRenderer data={rightFixed15} idString={"rightFixed15"} />
                <ShortInfo />
                <Disclosure15/>
            </div>
        </Layout>
    );
};

export default YearFixedConforming;