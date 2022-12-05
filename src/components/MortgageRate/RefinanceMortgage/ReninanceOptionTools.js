import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';



const refinance_tools_QL = graphql`
    query refinance_tools {
        refinance_tools: staticPagesJson {
            tools_options {
                url
                title
                sub_title
                text
                options {
                    url
                    name
                    image_url
                }
                option_List {
                    text
                    name
                }
            }
        }
    }
    `;

const ReninanceOptionTools = () => {
    const {refinance_tools:{tools_options}} = useStaticQuery(refinance_tools_QL);
    // console.log(tools_options);
    return (
        <section>
            <h1>{tools_options.title}</h1>
            <div>
                {
                    tools_options.options.map(tool => <div key={tool.name}>
                        <div>{tool.image_url}</div>
                        <div>
                            <b>{tool.name}</b>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <div>
                    <h3>{tools_options.sub_title}</h3>
                    <p>{tools_options.text}</p>
                    <Link to={tools_options.url}>Let's refinance today</Link>
                </div>
                <div>
                    {
                        tools_options.option_List.map((tool,idx) =><div key={`sd${idx}`}>
                            <h5>{tool.name}</h5>
                            <p>{tool.text}</p>
                        </div>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default ReninanceOptionTools;