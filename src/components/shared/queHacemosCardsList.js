import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 45%;
  align-items: center;

  p {
    color: white;
    font-size: 0.7rem;
    line-height: initial;
    text-align: center;
    width: 60%;
  }
`

const Arrow = styled.i`
  position: relative;
  display: inline-block;
  margin-bottom: ${props => props.marginBottom || "0"};
  margin-top: ${props => props.marginTop || "0"};
  margin-right: 5px;
  vertical-align: middle;
  color: rgb(253, 227, 0);
  box-sizing: border-box;
  min-width: 8px;
  height: 8px;
  border-width: 3px 3px 0 0;
  border-style: solid;
  transform: ${props => props.direction};
  
  &:before {
    content: "";
    box-sizing: border-box;
    right: 0px;
    top: -2px;
    position: absolute;
    height: 3px;
    box-shadow: inset 0 0 0 32px;
    transform: rotate(-45deg);
    width: 1rem;
    transform-origin: right top;
  }
  
  &:after {
    content: "";
    box-sizing: border-box;
  }
`

const Percent = styled.div`
  display: flex;
  align-items: center;
  color: rgb(253, 227, 0);
  margin-top: 0.8rem;
  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
  }

  span {
    display: inline-block;
    
     p {
      font-size: 0.8rem;
      color: rgb(253, 227, 0);
      margin: 0
    }
  } 
`

export default function QueHacemosCardsList() {
  const query = useStaticQuery(graphql`
    query {
      queHasemosdImg: allFile(
        filter: {
          relativePath: {}
          relativeDirectory: { eq: "images/queHacemos" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 300) {
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
    <CardsContainer>
      <Card>
        <Img
          style={{ width: "35%", height: "auto" }}
          fluid={query.queHasemosdImg.nodes[0].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
        <Percent>
          <Arrow direction={"rotate(135deg)"} marginTop={"0.6rem"}></Arrow>
          <span>
            <h1>
              200
              <span>
                <p>%</p>
              </span>
            </h1>
          </span>
        </Percent>
        <p>Coste por impacto</p>
      </Card>
      <Card>
        <Img
          style={{ width: "35%", height: "auto" }}
          fluid={query.queHasemosdImg.nodes[1].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
        <Percent>
          <Arrow direction={"rotate(-45deg)"} marginBottom={"0.5rem"}></Arrow>
          <span>
            <h1>
              180
              <span>
                <p>%</p>
              </span>
            </h1>
          </span>
        </Percent>
        <p>Incremento Earn Media</p>
      </Card>
      <Card>
        <Img
          style={{ width: "35%", height: "auto" }}
          fluid={query.queHasemosdImg.nodes[2].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
        <Percent>
          <Arrow direction={"rotate(-45deg)"} marginBottom={"0.5rem"}></Arrow>
          <span>
            <h1>
              80
              <span>
                <p>%</p>
              </span>
            </h1>
          </span>
        </Percent>
        <p>Percepción de marca</p>
      </Card>
      <Card>
        <Img
          style={{ width: "35%", height: "auto" }}
          fluid={query.queHasemosdImg.nodes[3].childImageSharp.fluid}
          alt="Icono de una pantalla ordenador con graficos"
        />
        <Percent>
          <Arrow direction={"rotate(-45deg)"} marginBottom={"0.5rem"}></Arrow>
          <span>
            <h1>
              180
              <span>
                <p>%</p>
              </span>
            </h1>
          </span>
        </Percent>
        <p>Alcance en Social Media</p>
      </Card>
    </CardsContainer>
  )
}
