import React, { useContext } from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import WaveAndText from "../waveAndText"
import { PagesStateContext } from '../layout'
import { Title, Wrapper, TextContainer } from "../../styles/styles"

export default function ModelEscritorio() {
  const { pages } = useContext(PagesStateContext)
  const text = 'Invertimos el flujo de la inversion para crear un valor de atracción central (VAC). Capaz de atraer al entorno que rodea a una marca y aumentar su impacto y valoración.'
  const title = 'Modelo de Atracción Central'
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
  
  return pages === 'modelo' ? (
        <Wrapper marginTop={ "30vh" }>
          <TextContainer>
            <Title>{title}</Title>
            <WaveAndText width={"31%"} text={text}></WaveAndText>
          </TextContainer>
          <Img
            style={{ width: "400px", height: "auto", overflow: "inherit" }}
            fluid={query.modelImg.nodes[0].childImageSharp.fluid}
            alt="Modelo de atracción central"
          />
        </Wrapper>
      ) : null
}
