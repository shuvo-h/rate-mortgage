import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';


const mortgage_finance_Ql = graphql`
    query mortgage_finance_QL {
        whatMortgageFinance: staticPagesJson {
        faqList {
            what_is {
                title
                id
                paragraphs {
                    text
                    urls {
                    name
                    url
                    }
                }
                }
            }
        }
    }
`;

const WhatMortgageRefinance = () => {
    const {whatMortgageFinance:{faqList:{what_is}}} = useStaticQuery(mortgage_finance_Ql);
    

    return (
        <section>
            <h1>{what_is.title}</h1>
            <div>
                {
                    what_is.paragraphs.map(para => makeHyperLink(para.text,para.urls))
                }
            </div>
        </section>
    );
};

export default WhatMortgageRefinance;