import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import data from "../../metadata/methodology"

const Subtitle = styled.h1`
  color: white;
  font-size 0.8rem;
  font-family: 'Futura-bold', Fallback, sans-serif;
  font-weight: 500;
  margin: 1rem 0;
  text-align: left;
  width: 100%;
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const Card = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-width: 140px;
  align-items: center;
`

const TextCard = styled.p`
  text-align: left;
  font-size 0.7rem;
  line-height: initial;
  color: white;
`

export default function ProcessCardList() {

  const query = useStaticQuery(graphql`
    query {
      processImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/method" } }
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
    <CardsContainer>
      <Card>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[0].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[0].title}</Subtitle>
        <TextCard>{data.methodology.stages[0].text}</TextCard>
      </Card>
      <Card>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[1].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[1].title}</Subtitle>
        <TextCard>{data.methodology.stages[1].text}</TextCard>
      </Card>
      <Card>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[2].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[2].title}</Subtitle>
        <TextCard>{data.methodology.stages[2].text}</TextCard>
      </Card>
      <Card>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[3].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[3].title}</Subtitle>
        <TextCard>{data.methodology.stages[3].text}</TextCard>
      </Card>
      <Card>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[4].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[4].title}</Subtitle>
        <TextCard>{data.methodology.stages[4].text}</TextCard>
      </Card>
      <Card>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[5].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[5].title}</Subtitle>
        <TextCard>{data.methodology.stages[5].text}</TextCard>
      </Card>
    </CardsContainer>
  )
}
