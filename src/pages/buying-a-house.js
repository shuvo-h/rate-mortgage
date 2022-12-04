import React from 'react';
import BannerByingHouse from '../components/Buying_A_House/BannerByingHouse';
import BuyingConsiderList from '../components/Buying_A_House/BuyingConsiderList';
import BuyingHouseToday from '../components/Buying_A_House/BuyingHouseToday';
import BuyingReasons from '../components/Buying_A_House/BuyingReasons';
import FAQ_HomeBuying from '../components/Buying_A_House/FAQ_HomeBuying';
import HowBuyToday from '../components/Buying_A_House/HowBuyToday';
import LowestRate from '../components/Buying_A_House/LowestRate';
import RantingVsBuying from '../components/Buying_A_House/RentingVsBuy/RantingVsBuying';
import StepsBuyingHouse from '../components/Buying_A_House/StepsBuyingHouse';
import ToolsOptionsPricing from '../components/Buying_A_House/ToolsOptionsPricing';
import TopHomeBuyAtricle from '../components/Buying_A_House/TopHomeBuyAtricle/TopHomeBuyAtricle';
import WaysToSaveMoney from '../components/Buying_A_House/WaysToSaveMoney/WaysToSaveMoney';
import Layout from '../components/Layout/layout';

const BuyingAhouse = () => {
    return (
        <Layout className='container'>
            <h1>Purchase your dream home</h1>
            <BannerByingHouse />
            <ToolsOptionsPricing />
            <BuyingHouseToday />
            <FAQ_HomeBuying />
            <BuyingReasons />
            <BuyingConsiderList />
            <HowBuyToday />
            <StepsBuyingHouse />
            <RantingVsBuying />
            <WaysToSaveMoney />
            <LowestRate />
            <TopHomeBuyAtricle />
        </Layout>
    );
};

export default BuyingAhouse;