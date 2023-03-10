/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


import * as React from "react";
import "../../styles/global.css";
import "../../styles/common.css";
import BottomFooter from "./Footer/BottomFooter";
import Footer from "./Footer/Footer";
import Header from "./Header";
import "./layout.css";


const Layout = ({ className="",children }) => {
  
  
  

  React.useEffect(()=>{
    // set the page full height vass value (for navbar drawer)
    document.documentElement.style.setProperty("--full_page_height",`${document.documentElement.scrollHeight}px`)
},[])


  return (
    <>
      <Header />
      {/* <main className={className} style={{marginTop:"58px"}}> */}
      <main className={className} style={{marginTop:"48px"}}>
        {children}
      </main>
      <footer>
        <Footer></Footer>
        <BottomFooter />
      </footer>
    </>
  )
}

export default Layout;
