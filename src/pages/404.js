import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import WaveAndText from "../components/waveAndText"



const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 4rem;
  margin-top: 20%;
  @media only screen and (max-device-width: 999px) {
    display: none;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`

const Title = styled.h1`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Futura-bold', Fallback, sans-serif;
`

const NotFoundPage = () => {
  const title = ""
  const text = ""
  const data = useStaticQuery(graphql`
      query {
        notFound: allFile(
          filter: { relativePath: {}, relativeDirectory: { eq: "images/notFound" } }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)

  return (
    < Layout >
      < SEO title="404" description="Page Not found" />
        <Wrapper>
          <TextContainer>
            <Title>{title}</Title>
            <WaveAndText width={"35%"} text={text}></WaveAndText>
          </TextContainer>
          <Img
            style={{ width: "350px", height: "auto", overflow: "inherit" }}
            fluid={data.notFound.nodes[0].childImageSharp.fluid}
            alt="Triangulo de pizza saludando a una piña"
          />
        </Wrapper>
    </Layout>
  )
}

export default NotFoundPage;
