import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const banner_QL = graphql`
    query refinance_banner {
        refinance_mtg: staticPagesJson {
        banner {
            title
            title_hint
            btn_url
        }
        }
    }
`;


const BannerRefinanceMort = () => {
    const {refinance_mtg:{banner}} = useStaticQuery(banner_QL);
    console.log(banner.banner_img,"In Com Ql Dt");
    return (
        <section>
            <em>{banner.title_hint}</em>
            <h1>{banner.title}</h1>
            <StaticImage src='../../../assets/static-images/refinance-mortgage/refinance-mortgage-banner.jpg' alt='' />
            <div>
                <Link to={banner.btn_url}>Get started</Link>
            </div>
        </section>
    );
};

export default BannerRefinanceMort;