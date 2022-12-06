import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';



const should_freinance_QL = graphql`
    query should_freinance_QL {
        shouldRefinance: staticPagesJson {
            faqList {
              should_refinance {
                title
                id
                refinance_reasons {
                  list {
                    title
                    details {
                      urls {
                        url
                        name
                      }
                      text
                    }
                  }
                  intro
                }
                paragraphs {
                  sub_title
                  paras {
                    urls {
                      url
                      name
                    }
                    text
                  }
                }
              }
            }
          }
    }
`;


const ShouldRefinance = () => {
    const {shouldRefinance:{faqList:{should_refinance}}} = useStaticQuery(should_freinance_QL);
    console.log(should_refinance,"should_refinance");
    return (
        <section>
            <h2>{should_refinance.title}</h2>
            <div>
                {
                    should_refinance.paragraphs.map(para => <div key={Math.random()}>
                        <h4>{para.sub_title}</h4>
                        {
                            para.paras.map(textInfo => makeHyperLink(textInfo.text,textInfo.urls))
                        }
                    </div>)
                }
            </div>
            <div>
                <p>{should_refinance.refinance_reasons.intro}</p>
                {
                    should_refinance.refinance_reasons.list.map(para => <div key={Math.random()}>
                        <h4>{para.title}</h4>
                        {
                            para.details.map(textInfo => <div key={Math.random()}>
                                {makeHyperLink(textInfo.text,textInfo.urls)}
                            </div>)
                        }
                    </div>)
                }
            </div>
            {/* <div>
                <h3>{should_refinance.home_rate.title}</h3>
                {
                    should_refinance.home_rate.paragraphs.map(para => <div key={Math.random()}>
                       {makeHyperLink(para.text,para.urls)}
                    </div>)
                }
            </div> */}
        </section>
    );
};

export default ShouldRefinance;