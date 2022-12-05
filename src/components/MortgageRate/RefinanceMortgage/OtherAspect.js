import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeHyperLink } from '../../../utils/makeHyperText';


const other_aspect_QL = graphql`
        query other_aspect_QL {
            otherAspectData: staticPagesJson {
                faqList {
                    other_aspect {
                        title
                        introduction {
                            sub_title
                            paragraphs {
                            urls {
                                url
                                name
                            }
                            text
                            }
                        }
                        id
                        cost_list
                        conclusion {
                            sub_title
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
            }
        }
`;


const OtherAspect = () => {
    const {otherAspectData:{faqList:{other_aspect}}} = useStaticQuery(other_aspect_QL);
    // console.log(other_aspect);
    return (
        <section>
            <h1>{other_aspect.title}</h1>
            <div>
                {
                    other_aspect.introduction.map(para => <div key={Math.random()}>
                        <h3>{para.sub_title}</h3>
                        <div>
                            {
                                para.paragraphs.map(textInfo =><div key={Math.random()}>
                                    {makeHyperLink(textInfo.text,textInfo.urls)}
                                </div>)
                            }
                        </div>
                    </div>)
                }
            </div>
            <div>
                <ul>
                    {
                        other_aspect.cost_list.map(list => <li key={list}>{list}</li>)
                    }
                </ul>
            </div>
            <div>
                {
                    other_aspect.conclusion.map(para => <div key={Math.random()}>
                        <h3>{para.sub_title}</h3>
                        <div>
                            {
                                para.paragraphs.map(textInfo =><div key={Math.random()}>
                                    {makeHyperLink(textInfo.text,textInfo.urls)}
                                </div>)
                            }
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default OtherAspect;