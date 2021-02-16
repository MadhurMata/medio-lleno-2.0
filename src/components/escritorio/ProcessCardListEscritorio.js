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

  @media only screen and (min-device-width: 1000px) {
    padding-left: 2rem;
  }
`

const Card = styled.div`
  display: ${props => (props.display ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  align-items: center;
  cursor: pointer;
`

const TextCard = styled.div`
  display: ${props => (props.display ? "none" : "flex")};
  text-align: center;
  font-size 0.8rem;
  line-height: initial;
  color: white;
  width: 50%;
`

export default function ProcessCardListEscritorio() {
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
        isAnalisisActive ? setAnalisis(false) : setAnalisis(true)
        isAnalisisActive ? setAnalisisVisivility(false) : setAnalisisVisivility(true)
        break
      case "estrategia":
        isEstrategiaActive ? setEstrategia(false) : setEstrategia(true)
        isEstrategiaActive ? setestrategiaVisivility(false) : setestrategiaVisivility(true)
        break
      case "desarrollo":
        isDesarrolloActive ? setDesarrollo(false) : setDesarrollo(true)
        isDesarrolloActive ? setdesarrolloVisivility(false) : setdesarrolloVisivility(true)
        break
      case "produccion":
        isProduccionActive ? setProduccion(false) : setProduccion(true)
        isProduccionActive ? setProduccionVisivility(false) : setProduccionVisivility(true)
        break
      case "lanzamiento":
        isLanzamientoActive ? setLanzamiento(false) : setLanzamiento(true)
        isLanzamientoActive ? setLanzamientoVisivility(false) : setLanzamientoVisivility(true)
        break
      case "seguimiento":
        isSeguimientoActive ? setSeguimiento(false) : setSeguimiento(true)
        isSeguimientoActive ? setSeguimientoVisivility(false) : setSeguimientoVisivility(true)
        break
      default:
        break
    }
  }

  return (
    <CardsContainer>
      <Card
        onMouseEnter={() => showInfo("analisis")}
        onMouseLeave={() => showInfo("analisis")}
        display={estrategiaVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[0].childImageSharp.fluid}
          alt="Monitor con gráficos"
        />
        <Subtitle>{data.methodology.stages[0].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "right" }} display={!estrategiaVisivility}>
        <p>{data.methodology.stages[1].text}</p>
      </TextCard>
      <Card
        onMouseEnter={() => showInfo("estrategia")}
        onMouseLeave={() => showInfo("estrategia")}
        display={analisisVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[1].childImageSharp.fluid}
          alt="Pieza de ajedrez mostrando estrategia"
        />
        <Subtitle>{data.methodology.stages[1].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "left" }} display={!analisisVisivility}>
        <p>{data.methodology.stages[0].text}</p>
      </TextCard>
      <Card
        onMouseEnter={() => showInfo("desarrollo")}
        onMouseLeave={() => showInfo("desarrollo")}
        display={produccionVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[2].childImageSharp.fluid}
          alt="Lapiz y una bombilla"
        />
        <Subtitle>{data.methodology.stages[2].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "right" }} display={!produccionVisivility}>
        <p>{data.methodology.stages[3].text}</p>
      </TextCard>
      <Card
        onMouseEnter={() => showInfo("produccion")}
        onMouseLeave={() => showInfo("produccion")}
        display={desarrolloVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[3].childImageSharp.fluid}
          alt="Cinta de producción con paquetes y brazo mecánico"
        />
        <Subtitle>{data.methodology.stages[3].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "left" }} display={!desarrolloVisivility}>
        <p>{data.methodology.stages[2].text}</p>
      </TextCard>
      <Card
        onMouseEnter={() => showInfo("lanzamiento")}
        onMouseLeave={() => showInfo("lanzamiento")}
        display={seguimientoVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[4].childImageSharp.fluid}
          alt="Coete espacial"
        />
        <Subtitle>{data.methodology.stages[4].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "right" }} display={!seguimientoVisivility}>
        <p>{data.methodology.stages[5].text}</p>
      </TextCard>
      <Card
        onMouseEnter={() => showInfo("seguimiento")}
        onMouseLeave={() => showInfo("seguimiento")}
        display={lanzamientoVisivility}
      >
        <Img
          style={{ width: "100px", height: "auto", overflow: "inherit" }}
          fluid={query.processImg.nodes[5].childImageSharp.fluid}
          alt="Lupa y gráficos"
        />
        <Subtitle>{data.methodology.stages[5].title}</Subtitle>
      </Card>
      <TextCard style={{ textAlign: "left" }} display={!lanzamientoVisivility}>
        <p>{data.methodology.stages[4].text}</p>
      </TextCard>
    </CardsContainer>
  )
}
