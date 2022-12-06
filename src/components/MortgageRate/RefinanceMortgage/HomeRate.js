import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';



const hole_rate_QL = graphql`
    query hole_rate_QL {
        home_rate_data: staticPagesJson {
            faqList {
                home_rate {
                title
                rate_factors {
                    text
                    image
                }
                paragraphs {
                    urls {
                    url
                    name
                    }
                    text
                }
                id
                }
            }
        }
    }

`;


const HomeRate = () => {
    const {home_rate_data:{faqList:{home_rate}}} = useStaticQuery(hole_rate_QL);
    
    return (
        <section>
            <div>
                <h3>{home_rate.title}</h3>
                {
                    home_rate.paragraphs.map(para =>makeHyperLink(para.text,para.urls))
                }
            </div>
            <div>
                {
                    home_rate.rate_factors.map(factor => <div key={Math.random()}>
                      <div>{factor.image}</div>
                      <div>
                        <p>{factor.text}</p>
                      </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default HomeRate;