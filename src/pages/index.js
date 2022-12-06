import * as React from "react";
import "../styles/global.css";
import Calculator from "../components/HomeComponents/Calculator/Calculator";
import DigitalPersonal from "../components/HomeComponents/DigitalPersonal";
import Mortgages from "../components/HomeComponents/Mortgages/Mortgages";
import Pavings from "../components/HomeComponents/Pavings/Pavings";
import PurchaseWork from "../components/HomeComponents/PurchaseWork/PurchaseWork";
import Topics from "../components/HomeComponents/Topics/Topics";

import Layout from "../components/Layout/layout";
import Seo from "../components/seo";
import Banner from "../components/HomeComponents/Banner";


const IndexPage = () => (
  <Layout>
    <div>

      {/* <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}

      <Banner />
      <p className='container py-4 my-5 text-center fs-3 px-4' style={{backgroundColor:"#eff4f5"}}>Leave your slow, old-school bank in the dust. Join the future of mortgages. <span><a style={{fontWeight:"600", textDecoration:"none",color:"#6495ED"}} href="https://www.rate.com/redirect?dest=https://apply.guaranteedrate.com/apply/loan-purpose&icid=stickybar:getrates">Get personalized rates</a></span></p>
      <Calculator />
      <PurchaseWork />
      <DigitalPersonal />
      <Mortgages />
      <Topics />
      <Pavings />
      </div>
  </Layout>
)


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage;









