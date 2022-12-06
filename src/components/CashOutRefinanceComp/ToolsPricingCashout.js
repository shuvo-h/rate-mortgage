import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const tools = [
    {
        image_name:"DesktopIcon_newv2",
        title:"Loan options",
        url:"/home-loans"
    },
    {
        image_name:"CalculatorIconBold",
        title:"Mortgage calculator",
        url:"/mortgage-calculators"
    },
    {
        image_name:"RatesIconBold",
        title:"Today's rates",
        url:"/mortgage-rates"
    },
]

const todaysTools = [
    {
        title:"An express pre-approval",
        text:"Get pre-approved fast with our Red Arrow Approval Express.*"
    },
    {
        title:"Our Digital Mortgage",
        text:"Our online application only takes about 10-15 minutes."
    },
    {
        title:"Choosing the best loan",
        text:"We’ll help you pick the best type of loan for you."
    },
    {
        title:"Professional mortgage help",
        text:"Contact us today to connect with a home loan expert."
    },
]

const cashout_QL = graphql`
    
    query cashout_QL {
        toolsImg: allFile(filter: {name: {in: 
            ["Group14","DesktopIcon_newv2","CalculatorIconBold","RatesIconBold"]
    }}) {
        nodes {
            id
            name
            childImageSharp {
                gatsbyImageData
            }
        }
        }
    }


`;


const ToolsPricingCashout = () => {
    const {toolsImg:{nodes}} = useStaticQuery(cashout_QL);
    // console.log(nodes);
    return (
        <section>
            <h1>Cash-out refinance options and pricing tools</h1>
            <div>
                {
                    tools.map(tool => <div>
                        <div>
                        <GatsbyImage image={getImage(nodes.find(el => el.name === tool.image_name?.trim())?.childImageSharp)} alt=""></GatsbyImage> 
                        </div>
                        <div>
                            <h4>{tool.title}</h4>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <div>
                    <h2>Make your home equity work for you.</h2>
                    <p>With a cash-out refi from Guaranteed Rate, you can transform your home equity into cash. Consolidate debt with the money you've already put into your home*. Use your cash-out refi for emergency expenses, college tuition, home improvement projects — you name it! Contact our refinance experts to get started today and receive your cash-out payment as soon as possible.</p>
                    <Link to='' >Get cash now</Link>
                </div>
                <div>
                    <h2>Get started today...</h2>
                    <div>
                        {
                            todaysTools.map(tool => <div>
                                <h3>{tool.title}</h3>
                                <p>{tool.text}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsPricingCashout;