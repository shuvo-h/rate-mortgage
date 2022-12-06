import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/layout';
import CompareCurrentRate from '../components/MortgageRate/CompareCurrentRate';
import MortgageRateDiscalimar from '../components/MortgageRate/MortgageRateDiscalimar';
import RateQuestionsAns from '../components/MortgageRate/RateQuestionsAns/RateQuestionsAns';
import RecentMortgageArticles from '../components/MortgageRate/RecentMortgageArticles/RecentMortgageArticles';
import TableOfContents from '../components/MortgageRate/TableOfContents/TableOfContents';

const MortgageRates = () => {
   
    return (
        <Layout className='container'>
            <CompareCurrentRate />
            <TableOfContents />
            <RateQuestionsAns />
            <MortgageRateDiscalimar />
            <RecentMortgageArticles />
        </Layout> 
    );
};

export default MortgageRates;

