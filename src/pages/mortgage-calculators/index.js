import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { LinkRegular } from '../../components/common/ButtonRegular';
import Layout from '../../components/Layout/layout';
import CalcFAQlist from '../../components/MortgageCalsCmp/mortgageCals/CalcFAQlist';
import MortgageCalculator from '../../components/MortgageCalsCmp/mortgageCals/MortgageCalculator';
import OptionsTools from '../../components/MortgageCalsCmp/mortgageCals/OptionsTools';


const mortgageCalc_QL = graphql`
    query mortgageCalc_QL {
        best_img: file(name: {eq: "the-best"}) {
            size
            relativeDirectory
            name
            childImageSharp {
                gatsbyImageData
            }
        }
    }

`;


const MortgageCalculators = () => {
    const {best_img} = useStaticQuery(mortgageCalc_QL);
    console.log(best_img);

    return (
        <Layout className='container'>
            <h1>Mortgage Calculator</h1>
            <MortgageCalculator />
            <OptionsTools />
            <div>
                <h1 className='text-center fw-bolder my-5'>Get personalized rate estimates in as little as three minutes.</h1>
                <div className='text-center'>
                    <LinkRegular url='' className='text-white bg-danger' label={"Apply now"} />
                </div>
                <div className='text-center my-4' >
                    <GatsbyImage image={getImage(best_img.childImageSharp)} alt="" />
                </div>
            </div>
            <CalcFAQlist />
        </Layout>
    );
};

export default MortgageCalculators;