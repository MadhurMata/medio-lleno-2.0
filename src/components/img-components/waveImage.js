import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default function WaveImage(props) {
  const query = useStaticQuery(graphql`
  query {
    waveImg: allFile(
      filter: { relativePath: {}, relativeDirectory: { eq: "images/wave" } }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 196) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`)   

  return <Img
  style={{ width: props.width, maxWidth: "196px", height: "auto", overflow: "inherit" }}
  fluid={query.waveImg.nodes[0].childImageSharp.fluid}
  alt="Linea curva del logo"
/>
}
