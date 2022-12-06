import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout/layout';

const contact_list = [
    {
        image_name:"Group14",
        title:"Loan servicing",
        text:"Assistance with an existing loan, making payments, taxes and insurance, and servicing transfers.",
        btn:{
            title:"Get started",
            url:"/contact-us/servicing/select"
        },
    },
    {
        image_name:"DesktopIcon_newv2",
        title:"Application questions & general information",
        text:"Assistance with a loan application and processing issues.",
        btn:{
            title:"Get support",
            url:"/contact-us/loan-applications"
        },
    },
    {
        image_name:"Homevaluation",
        title:"New loan",
        text:"Get started on a new loan application.",
        btn:{
            title:"Learn more",
            url:"/contact-us/new-loan"
        },
    },
    {
        image_name:"Underconstruction",
        title:"Corporate support",
        text:"Careers, employment verification, marketing and media.",
        btn:{
            title:"Get support",
            url:"/contact-us/corporate"
        },
    },
    {
        image_name:"Populartopic-First-timebuyer",
        title:"Partnerships",
        text:"Join our Appraisal Panel, Relocation Mortgage Programs, Corporate Discounts and more.",
        btn:{
            title:"Get support",
            url:"/contact-us/partnerships"
        },
    },
    {
        image_name:"Cancel",
        title:"Do not call",
        text:"To be added to the Do Not Call list please click the link below:",
        btn:{
            title:"Get support",
            url:"/contact-us/do-not-call"
        },
    },
]

const contact_QL = graphql`

    query contact_QL {
        contactData: allFile(filter: {name: {in: 
            ["Group14","DesktopIcon_newv2","Homevaluation","Underconstruction","Populartopic-First-timebuyer","Cancel","the-best"]
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

const ContactUs = () => {
    const {contactData:{nodes}} = useStaticQuery(contact_QL);
    console.log(nodes.find(el => el.name === "Cancel")?.childImageSharp);
    console.log(nodes);
    return (
        <Layout className='container'>
            <h1>How can we help you today?</h1>
            <p>Please choose from the options below.</p>
            <div></div>
            <div>
                <h1>Have a question? Ask Joy, our Guaranteed Rate Virtual Assistant.</h1>
            </div>
            <div>
                {
                    contact_list.map((contact,idx) => <div key={idx}>
                        <div>
                            <GatsbyImage image={getImage(nodes.find(el => el.name === contact.image_name?.trim())?.childImageSharp)} alt=""></GatsbyImage>
                        </div>
                        <div>
                            <h3>{contact.title}</h3>
                            <p>{contact.text}</p>
                            <Link to={contact.btn.url}>{contact.btn.title}</Link>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <h1>Have a question? Ask Joy, our Guaranteed Rate Virtual Assistant.</h1>
            </div>
            <div>
            <GatsbyImage image={getImage(nodes.find(el => el.name === "the-best"?.trim())?.childImageSharp)} alt=""></GatsbyImage>
            </div>
        </Layout>
    );
};

export default ContactUs;