import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import WaveImage from "../img-components/waveImage"

const Title = styled.h1`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Futura-bold", Fallback, sans-serif;
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

export default function Model() {
  const text =
    "Invertimos el flujo de la inversion para crear un valor de atracción central (VAC). Capaz de atraer al entorno que rodea a una marca y aumentar su impacto y valoración."
  const title = "Modelo de Atracción Central"
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
    }
  `)

  return (
    <>
      <Title name={"model"}>{title}</Title>
      <Img
        style={{ width: "100%", height: "auto", overflow: "inherit" }}
        fluid={query.modelImg.nodes[0].childImageSharp.fluid}
        alt=" Gráfico del modelo de atracción central"
      />
      <Text>{text}</Text>
      <CenteredWave>
        <WaveImage width={"45%"}></WaveImage>
      </CenteredWave>
    </>
  )
}
