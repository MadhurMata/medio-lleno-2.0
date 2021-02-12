import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

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
  font-size: 2.2rem;
  font-weight: 500;
  font-family: 'Futura-bold', Fallback, sans-serif;
`

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  p {
    width: 55%;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    line-height: 1.4rem;
  }
`

export default function ModelPage({ location }) {
  const query = useStaticQuery(graphql`
    query {
      modelImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/model" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      waveImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <Layout pathUrl={location.pathname}>
      <Wrapper>
        <TextContainer>
          <Title>Modelo de Atracción Central</Title>
          <HorizontalFlex>
            <Img
              style={{ width: "35%", height: "auto", overflow: "inherit" }}
              fluid={query.waveImg.nodes[0].childImageSharp.fluid}
              alt="Medio Lleno logo"
            />
            <p>
              Invertimos el flujo de la inversion para crear un valor de
              atracción central (VAC). Capaz de atraer al entorno que rodea a
              una marca y aumentar su impacto y valoración.
            </p>
          </HorizontalFlex>
        </TextContainer>
        <Img
          style={{ width: "350px", height: "auto", overflow: "inherit" }}
          fluid={query.modelImg.nodes[0].childImageSharp.fluid}
          alt="Modelo de atracción central"
        />
      </Wrapper>
    </Layout>
  )
}
