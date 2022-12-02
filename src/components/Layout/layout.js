/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import "../../styles/global.css";
import BottomFooter from "./Footer/BottomFooter";
import Footer from "./Footer/Footer";
import Header from "./Header";
import "./layout.css";


const Layout = ({ className="",children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  

  React.useEffect(()=>{
    // set the page full height vass value (for navbar drawer)
    document.documentElement.style.setProperty("--full_page_height",`${document.documentElement.scrollHeight}px`)
},[])


  return (
    <>
      <Header />
      <div>
        <main className={className}>{children}</main>
        <footer>
          <Footer></Footer>
          <BottomFooter />
        </footer>
      </div>
    </>
  )
}

export default Layout;