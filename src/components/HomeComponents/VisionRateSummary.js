import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const visionmission_QL = graphql`
    query visionmission_QL {
        missionImg: file(name: {eq: "vision"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
        housingImg: file(name: {eq: "housing"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
        signImg: file(name: {eq: "sign_logo"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
        graph_demo_img: file(name: {eq: "mortgage-dem"}) {
            name
            childImageSharp {
            gatsbyImageData
            }
        }
    }
`;

const VisionRateSummary = () => {
    const {missionImg,housingImg,signImg,graph_demo_img} = useStaticQuery(visionmission_QL);
    // console.log(missionImg);
    return (
        <section className='container row g-4 my-3 mx-auto'>
            
            <div className='col-12 col-lg-2'>
                <div className='text-white text-center mx-auto' style={{maxWidth:"280px"}}>
                    <h3 className='p-2 m-0' style={{background:"#164b88"}}>Your Vision...</h3>
                    <GatsbyImage image={getImage(missionImg.childImageSharp)} alt='' />
                    <h3 className='p-2 m-0' style={{background:"#164b88"}}>Our Mision...</h3>
                </div>
                <div className='mx-auto' style={{maxWidth:"280px"}}>
                    <h6 className='my-3 text-center'><u>Member Organizations</u></h6>
                    <div className='row g-2'>
                        <div className='col-6'>
                            <GatsbyImage image={getImage(signImg.childImageSharp)} alt='' />
                        </div>
                        <div className='col-6 border rounded'>
                            <GatsbyImage image={getImage(housingImg.childImageSharp)} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col-12 col-lg-5'>
                <div>
                    <p className='text-center rounded' style={{border:"1px solid"}}><b>Why DMV Home Loan Experts?</b></p>
                    <div className='text-center' style={{color:"#164b88"}}>
                        <p className='mb-1'><b>We offer the following to suit your needs:</b></p>
                        <h1 className='my-0'>Down</h1>
                        <h1 className='my-0'>Payment</h1>
                        <h1 className='my-0 text-white'>ASSISTANCE</h1>
                    </div>
                    <div>
                        <p className='text-center rounded' style={{border:"1px solid"}}><b>Access our Mortgage Calculator</b></p>
                        <p className='text-center rounded' style={{border:"1px solid"}}><b>Latest News on Mortgage</b></p>
                        <p className='text-center rounded' style={{border:"1px solid"}}><b>Ask our Experts Today</b></p>
                    </div>
                </div>
            </div>

            <div className='col-12 col-lg-5'>
                {/* <h2>Graph Chart</h2> */}
                <div>
                    <GatsbyImage image={getImage(graph_demo_img.childImageSharp)} alt='' />
                </div>
            </div>

        </section>
    );
};

export default VisionRateSummary;