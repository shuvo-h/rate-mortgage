import React, {useState} from 'react';
import Layout from '../../../components/Layout/layout';

import ContentList30 from '../../../components/MortgageRates/Assumption/15_year_fixedConf/ContentList30';
import Advantage15Year from '../../../components/MortgageRates/Assumption/15_year_fixedConf/Advantage15Year';
import Chart from '../../../components/chart/chart';
import SimilarRenderer from '../../../components/MortgageRates/Assumption/15_year_fixedConf/WhatFixedRate15';
import AmortizationChart from './AmortizationChart';
import Great30Rate from '../../../components/MortgageRates/Assumption/15_year_fixedConf/Great30Rate';
import {span_text, hidescroll} from "./index.module.css";

import { whatAfixedRate30, fixedRate30YearMortages,disadvantage30YearData, diifIntRateAPR, amortizationSche, diifBtwFixedAndAdjustable, advantage30YearData } from '../../../components/MortgageRates/Assumption/15_year_fixedConf/SimilarLists';

const ThirtyYearFixedConforming = () => {
    const [percentage, setPercentage] = useState(0);
    const [yearLabel, setYearLabel] = useState("");

    const handleMouseMoveInChart = (yearParam, percentParama) => {
        setYearLabel(yearParam);
        setPercentage(percentParama)
    }

    return (
        <Layout className='container' >
            <h1>30-Year Fixed Rate Mortgage</h1>
            <span className={span_text}>UNITED STATES AVERAGE</span>

            <p>{percentage}% - {yearLabel}</p>
            <div className={hidescroll} style={{overflowX: 'scroll'}}>
                <Chart handleMouseMoveInChart={handleMouseMoveInChart} />
            </div>

            <div>
                <ContentList30 />

                <SimilarRenderer data={whatAfixedRate30} idString={"whatAfixedRate30"} />

                <SimilarRenderer data={fixedRate30YearMortages} idString={"30YearFixedRate"} />

                <SimilarRenderer data={diifIntRateAPR} idString={"diffBtwIntAndAPR"} />

                <SimilarRenderer data={amortizationSche} idString={"amortizationSche"} />

                <AmortizationChart />

                <SimilarRenderer data={diifBtwFixedAndAdjustable} idString={"fixedRateAndAjustablle"} />

                <Great30Rate idString={"Great30Rate"} />

                <Advantage15Year adDis_vantage={advantage30YearData} idString={"advantage30YearData"} />

                <Advantage15Year adDis_vantage={disadvantage30YearData} idString={"disaddOf30yearFixed"} />


            </div>
        </Layout>
    );
};

export default ThirtyYearFixedConforming;