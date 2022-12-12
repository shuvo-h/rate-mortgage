import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ssampleTest_QL = graphql`

  query MyQuery {
    allFile(filter: {name: {eq: "three-out-four"}}) {
      nodes {
        size
        name
        publicURL
        relativePath
        relativeDirectory
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }

`;



export default function Hero() {
  const result = useStaticQuery(ssampleTest_QL)
  console.log(result.allfile);
  return (
    <>
    
    </>
  )
}