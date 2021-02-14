import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import WaveImage from '../components/img-components/waveImage'

const Desktop = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  @media only screen and (max-device-width: 999px) {
    display: none;
  }
`

const Devices = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-device-width: 1000px) {
    display: none;
  }
`

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

const Text = styled.p`
margin-top: 1rem;
font-size 0.8rem;
color: white;
text-align: left;
width: 100%;
`

const CenteredWave = styled.div`
  width: 100%;
  display flex;
  justify-content: center;
  margin: 2rem 0;
`

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 560px;

  p {
    width: 50%;
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    line-height: 1.4rem;
  }
`

const NotFoundPage = () => {
  const title = "Se ha producido un error, no es tan grave como la pizza con piña."
  const text = "para solucionar el problema"
  const alt = "Triangulo de pizza saludando a una piña"
  const query = useStaticQuery(graphql`
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
        <Devices>
        <Title style={{ marginTop: "40%" }}>{title}</Title>
        <Img
            style={{ width: "100%", height: "auto", overflow: "inherit" }}
            fluid={query.notFound.nodes[0].childImageSharp.fluid}
            alt={alt}/>
        <Text><span><Link style={{ fontWeight: 700, textDecoration: "none", color: "rgb(253,227,0)" }} to="/">Click me </Link></span>{text}</Text>
        <CenteredWave>
          <WaveImage width={"45%"}></WaveImage>
        </CenteredWave>
        </Devices>
        <Desktop>
          <Wrapper>
            <TextContainer>
              <Title>{title}</Title>
              <HorizontalFlex>
                <WaveImage width={"35%"}></WaveImage>
                <Text><span><Link style={{ fontWeight: 700, textDecoration: "none", color: "rgb(253,227,0)" }} to="/">Click me </Link></span>{text}</Text>
              </HorizontalFlex>
            </TextContainer>
            <Img
              style={{ width: "350px", height: "auto", overflow: "inherit" }}
              fluid={query.notFound.nodes[0].childImageSharp.fluid}
              alt={alt}
            />
          </Wrapper>
        </Desktop>
    </Layout>
  )
}

export default NotFoundPage;
