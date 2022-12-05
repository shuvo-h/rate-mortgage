import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';


const banner_QL = graphql`
    query refinance_banner {
        refinance_mtg: staticPagesJson {
        banner {
            banner_img
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
            <div>
                <Link to={banner.btn_url}>Get started</Link>
            </div>
        </section>
    );
};

export default BannerRefinanceMort;