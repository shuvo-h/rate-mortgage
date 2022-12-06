import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const bannerCash_QL = graphql`
    query bannerCash_QL {
        cashout_banner: file(name: {eq: "cashout-finance_banner"}) {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
    }
`;

const BannerCashOut = () => {
    const {cashout_banner} = useStaticQuery(bannerCash_QL);
    // console.log(cashout_banner.childImageSharp);
    return (
        <section>
            <p>Cash-out refinance</p>
            <h1>Get cash for your home equity.</h1>
            <GatsbyImage image={getImage(cashout_banner.childImageSharp)} alt=""></GatsbyImage>
            BannerCashOut
        </section>
    );
};

export default BannerCashOut;