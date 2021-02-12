import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProcessCardList from '../components/shared/processCardsList'

import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
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
  width: 600px;
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

export default function ProcessPage({ location }) {
  const query = useStaticQuery(graphql`
    query {
      slidesImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/wave" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <Layout pathUrl={location.pathname}>
      <div>
        <Wrapper>
          <TextContainer>
            <Title>Nuestro proceso de trabajo se divide en 6 etapas independientes.</Title>
            <HorizontalFlex>
                    <Img
                      style={{ width: "35%", height: "auto", overflow: "inherit" }}
                      fluid={query.slidesImg.nodes[0].childImageSharp.fluid}
                      alt="Medio Lleno logo"/>
                    <p>Este sistema modular permite adaptarnos con facilidad a cada cliente, optimizar el proceso y buscar la excelencia en cada paso.</p>
                  </HorizontalFlex>
          </TextContainer>
          <ProcessCardList></ProcessCardList>
        </Wrapper>
      </div>
    </Layout>
  )
}