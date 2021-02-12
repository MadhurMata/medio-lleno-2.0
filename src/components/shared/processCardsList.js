import React, { useState } from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import data from "../../metadata/methodology"

const Subtitle = styled.h1`
  color: white;
  font-size 0.8rem;
  font-family: 'Futura-bold', Fallback, sans-serif;
  font-weight: 500;
  margin: 1rem 0 2rem;
  text-align: center;
  width: 100%;
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const Card = styled.div`
  display: ${props => (props.display ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  align-items: center;
  @media only screen and (min-device-width: 1000px) {
    width: 30%;
  }
`

const TextCard = styled.div`
  display: ${props => (props.display ? "none" : "flex")};
  text-align: center;
  font-size 0.8rem;
  line-height: initial;
  color: white;
  width: 50%;
  @media only screen and (min-device-width: 1000px) {
    width: 30%;
  }
`

export default function ProcessCardList() {
  const [isAnalisisActive, setAnalisis] = useState(false)
  const [analisisVisivility, setAnalisisVisivility] = useState(false)
  const [isEstrategiaActive, setEstrategia] = useState(false)
  const [estrategiaVisivility, setestrategiaVisivility] = useState(false)
  const [isDesarrolloActive, setDesarrollo] = useState(false)
  const [desarrolloVisivility, setdesarrolloVisivility] = useState(false)
  const [isProduccionActive, setProduccion] = useState(false)
  const [produccionVisivility, setProduccionVisivility] = useState(false)
  const [isLanzamientoActive, setLanzamiento] = useState(false)
  const [lanzamientoVisivility, setLanzamientoVisivility] = useState(false)
  const [isSeguimientoActive, setSeguimiento] = useState(false)
  const [seguimientoVisivility, setSeguimientoVisivility] = useState(false)

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


  const showInfo = processPhase => {
    switch (processPhase) {
      case "analisis":
        setAnalisis(!isAnalisisActive)
        setAnalisisVisivility(!analisisVisivility)
        break
      case "estrategia":
        setEstrategia(!isEstrategiaActive)
        setestrategiaVisivility(!estrategiaVisivility)
        break
      case "desarrollo":
        setDesarrollo(!isDesarrolloActive)
        setdesarrolloVisivility(!desarrolloVisivility)
        break
      case "produccion":
        setProduccion(!isProduccionActive)
        setProduccionVisivility(!produccionVisivility)
        break
      case "lanzamiento":
        setLanzamiento(!isLanzamientoActive)
        setLanzamientoVisivility(!lanzamientoVisivility)
        break
      case "seguimiento":
        setSeguimiento(!isSeguimientoActive)
        setSeguimientoVisivility(!seguimientoVisivility)
        break
    }
  }

  return (
    <CardsContainer>
      <Card onClick={() => showInfo("analisis")} display={estrategiaVisivility}>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[0].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[0].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "right" }} display={!estrategiaVisivility}>
        <p>{data.methodology.stages[1].text}</p>
      </TextCard>
      <Card onClick={() => showInfo("estrategia")} display={analisisVisivility}>
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[1].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[1].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "left" }} display={!analisisVisivility}>
        <p>{data.methodology.stages[0].text}</p>
      </TextCard>
      <Card
        onClick={() => showInfo("desarrollo")}
        display={produccionVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[2].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[2].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "right" }} display={!produccionVisivility}>
        <p>{data.methodology.stages[3].text}</p>
      </TextCard>
      <Card
        onClick={() => showInfo("produccion")}
        display={desarrolloVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[3].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[3].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "left" }} display={!desarrolloVisivility}>
        <p>{data.methodology.stages[2].text}</p>
      </TextCard>
      <Card
        onClick={() => showInfo("lanzamiento")}
        display={seguimientoVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[4].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[4].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "right" }} display={!seguimientoVisivility}>
        <p>{data.methodology.stages[5].text}</p>
      </TextCard>
      <Card
        onClick={() => showInfo("seguimiento")}
        display={lanzamientoVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[5].childImageSharp.fluid}
          alt="Medio Lleno logo"
        />
        <Subtitle>{data.methodology.stages[5].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "left" }} display={!lanzamientoVisivility}>
        <p>{data.methodology.stages[4].text}</p>
      </TextCard>
    </CardsContainer>
  )
}
