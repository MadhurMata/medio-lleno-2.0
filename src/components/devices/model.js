import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import WaveImage from "../img-components/waveImage"
import { Title, Text, CenteredWave, Container } from "../../styles/styles"

export default function Model() {
  const text =
    "Invertimos el flujo de la inversion para crear un valor de atracción central (VAC). Capaz de atraer al entorno que rodea a una marca y aumentar su impacto y valoración."
  const title = "Modelo de Atracción Central."
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
    <Container>
      <Title name={"model"}>{title}</Title>
      <Img
        style={{ width: "300px", height: "auto", overflow: "inherit", marginBottom: "2rem" }}
        fluid={query.modelImg.nodes[0].childImageSharp.fluid}
        alt=" Gráfico del modelo de atracción central"
      />
      <Text>{text}</Text>
      <CenteredWave>
        <WaveImage width={"45%"}></WaveImage>
      </CenteredWave>
    </Container>
  )
}
