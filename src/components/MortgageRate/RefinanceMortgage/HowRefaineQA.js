import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';



const how_refine_QL = graphql`
    query MyQuery {
        How_refine: staticPagesJson {
        faqList {
            How_refinance {
                id
                title
                paragraphs {
                    urls {
                    url
                    name
                    }
                    text
                }
                conclusion {
                    urls {
                    url
                    name
                    }
                    text
                }
                asking_list {
                    urls {
                    url
                    name
                    }
                    text
                    image
                }
            }
        }
        }
    }
`;


const HowRefaineQA = () => {
    const {How_refine:{faqList:{How_refinance}}} = useStaticQuery(how_refine_QL);

    return (
        <section>
            <h2>{How_refinance.title}</h2>
            <div>
                {
                    How_refinance.paragraphs.map(para => <div key={Math.random()}>
                        {makeHyperLink(para.text,para.urls)}
                    </div>)
                }
            </div>
            <div>
                {
                    How_refinance.asking_list.map(para => <div key={Math.random()}>
                        <div>
                            {para.image}
                        </div>
                        <div>
                            {makeHyperLink(para.text,para.urls)}
                        </div>
                    </div>)
                }
            </div> 
            <div>
                {
                    How_refinance.conclusion.map(para => <div key={Math.random()}>
                        {makeHyperLink(para.text,para.urls)}
                    </div>)
                }
            </div>
        </section>
    );
};

export default HowRefaineQA;