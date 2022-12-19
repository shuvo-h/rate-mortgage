import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import {banner_static_container} from "./banner_static.module.css";


const bannerStatic_QL = graphql`
    query bannerStatic_QL {
        logo_lg: file(name: {eq: "mort-logo-sample"}) {
            name
            childImageSharp {
            gatsbyImageData (layout: CONSTRAINED)
            }
        }
        
    }
`;


const BannerStatic = () => {
    const {logo_lg} = useStaticQuery(bannerStatic_QL);
    return (
        <section className={banner_static_container}>
            <div className='container row g-5 mx-auto py-4' >
                <div className='co-12 col-md-6'>
                    <div style={{maxWidth:"500px"}}>
                        <GatsbyImage   image={getImage(logo_lg.childImageSharp)} layout="fullWidth" alt='' />
                    </div>
                </div>
                <div className='co-12 col-md-6 text-center'>
                    <h2>Start your Homeownership Journey with Us!</h2>
                    <p>Experts offer instant home loan approvals with no obligation. Speak with a home loan expert to receive your pre-approval letter <b>TODAY</b></p>
                    <Link className='text-dark bg-white w-100 py-1 d-block rounded text-decoration-none' to=''>Get Pre-Approved Now</Link>
                </div>
            </div>
        </section>
    );
};

export default BannerStatic;