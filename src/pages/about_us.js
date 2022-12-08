import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout/layout';

const first_customer_text = [
    "When Guaranteed Rate began twenty two years ago, the mortgage industry was entirely set up for the lenders, at the expense of the people who were just trying to buy a home. It wasn’t right.",
    "So we flipped the industry on its head by putting the customer first, instead of the lender. For us, everything was, and still remains, all about providing a better experience for the customer. We are absolutely committed to delivering service so exceptional that our customers can’t wait to recommend us to their family and friends.",
    "Our Net Promoter Score – which is a simple indication of your happiness – is 88, which is more than 2x the industry average*. And while that’s fantastic, we’re always working to make it even better."
]
const deliverRate = [
    "Right from the start, Guaranteed Rate began by breaking apart the entire mortgage process and evaluating every single step. How can this be better, faster, easier? Where could technology make something better?",
    "We designed a unique “Proactive Mortgage Pod” model that surrounds each of our top-performing loan officers with his or her own team of highly-trained specialists, streamlining the process for customers through state-of-the-art data and communications technologies. Every loan moves faster. Every customer is happier.",
    "By simplifying the loan process, hiring only the best of the best employees, and developing cutting-edge tech, we can bring both low rates and the highest level of service to every customer."
]

const way_time_list = [
    {
        title:"GRaffordable",
        img_name:"CalculatorIcon",
        text:"Our mortgage calculator provides real-time rates and loan options, without having to provide contact info."
    },
    {
        title:"Apply online. Anywhere.",
        img_name:"Applyonlineanywhere",
        text:"We created the world’s first digital mortgage, so easy that an application takes less than 15 minutes."
    },
    {
        title:"Transfersafe",
        img_name:"Group10",
        text:"Our secure document portal lets you easily share financial documents in a secure environment and eliminates time-wasting paper-pushing."
    },
    {
        title:"Close the loan from home",
        img_name:"Closefromhome",
        text:"Never satisfied, we created FlashClose—award-winning technology that lets you close in minutes, from anywhere."
    },
]

const aboutUs_QL = graphql`
    query aboutUs_QL {
        way_img_list: allFile(filter: {relativeDirectory: {eq: "about_us"},name: {in: 
            ["Applyonlineanywhere","CalculatorIcon","Closefromhome","Group10"]}}) {
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
const AboutUs = () => {
    const {way_img_list:{nodes}} = useStaticQuery(aboutUs_QL);
    // console.log(nodes);
    return (
        <Layout className='container'>
            <section>
                <p>Overview</p>
                <h1>We’re here to help you get your dream home.</h1>
                <p>Our perfect combination of technology and human touch provides unparalleled value.</p>
                <div>
                    <StaticImage src='../assets/static-images/about_us/about_us_banner.png' alt='banner' />
                    <button>Watch the video</button>
                </div>
            </section>
            <section>
                <h1>Put the customer first.</h1>
                <div>
                    {
                        first_customer_text.map((text,idx) => <p key={idx}>{text}</p>)
                    }
                </div>
                <div>
                    <h1>97%</h1>
                    <h5>of our customers would refer us to their friends and families.*</h5>
                </div>
            </section>
            <section>
                <h1>Deliver low, low rates with a streamlined process.</h1>
                <div>
                    {
                        deliverRate.map((text,idx) => <p key={idx}>{text}</p>)
                    }
                </div>
            </section>

            <section>
                <h1>Get your mortgage, your way, anytime, anywhere.</h1>
                <p>We understand that choosing a mortgage is the biggest financial decision of your life, and we’re committed to making the process as seamless, friendly and financially valuable to you as possible.</p>
                <div>
                    {
                        way_time_list.map(way => <div key={way.title}>
                            <div>
                                <GatsbyImage image={getImage(nodes.find(el => el.name === way.img_name?.trim())?.childImageSharp)} alt=""></GatsbyImage>
                            </div>
                            <div>
                                <h3>{way.title}</h3>
                                <p>{way.text}</p>
                            </div>
                        </div>)
                    }
                </div>
            </section>

        </Layout>
    );
};

export default AboutUs;