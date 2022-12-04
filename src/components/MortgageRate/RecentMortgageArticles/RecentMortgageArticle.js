import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const RecentMortgageArticle = ({recentMortgageArticle,recentArticle}) => {
    /*
    const recentArticle = useStaticQuery(graphql`
        query MortgageRecentArticle {
            article_img: file(relativePath: {eq: "mortgage_rate/jolly_session.jpg"}) {
            relativePath
            id
            name
            childImageSharp {
                id
                gatsbyImageData(layout: CONSTRAINED)
            }
            }
        }
    `)
    */
    return (
        <div className='col-12 col-lg-4 card'>
            
            <div className="">
            <div>
                <GatsbyImage image={getImage(recentArticle.article_img.childImageSharp)} />
            </div>
            <h5 class="card-title p-3">{recentMortgageArticle.title}</h5>
            <div className="card-body">
                <p className="card-text">{recentMortgageArticle.short_para}</p>
            </div>
            </div>

        </div>
    );
};

export default RecentMortgageArticle;