import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';








const know_refinance_QL = graphql`
    query know_refinance {
        knows: staticPagesJson {
        knowRefinance {
            title
            paragraphs {
            urls {
                url
                name
            }
            text
            }
        }
        }
    }
`;





const KnowRefinance = () => {
    const {knows:{knowRefinance}} = useStaticQuery(know_refinance_QL);
    
    return (
        <section>
            <h2>{knowRefinance.title}</h2>
            <div>
                {
                    knowRefinance.paragraphs.map(para=><div key={Math.random()}>
                        {makeHyperLink(para.text,para.urls)}
                    </div>)
                }
            </div>
        </section>
    );
};

export default KnowRefinance;