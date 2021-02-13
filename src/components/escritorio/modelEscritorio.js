import React, { useContext } from 'react'
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import WaveAndText from "../waveAndText"
import { PagesStateContext } from '../layout'

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
        <Wrapper>
          <TextContainer>
            <Title>{title}</Title>
            <WaveAndText width={"35%"} text={text}></WaveAndText>
          </TextContainer>
          <Img
            style={{ width: "350px", height: "auto", overflow: "inherit" }}
            fluid={query.modelImg.nodes[0].childImageSharp.fluid}
            alt="Modelo de atracción central"
          />
        </Wrapper>
      ) : null
}
