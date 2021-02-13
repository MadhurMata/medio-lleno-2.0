import React, { useContext } from 'react'
import data from "../../metadata/contact"
import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import WaveImage from '../img-components/waveImage'
import { PagesStateContext } from '../layout'

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-family: 'Futura-bold', Fallback, sans-serif;
  font-size 1.6rem;
  font-weight: 550;
  text-align: left;
  width: 100%;

  @media only screen 
  and (min-device-width: 1000px) {
      font-size: 2.5rem;    
  }
`

const Subtitle = styled.h1`
  color: white;
  font-family: 'Futura-bold', Fallback, sans-serif;
  font-size 0.7rem;
  font-weight: 550;
  width: 100%;
  text-align: left;
  line-height: 1.3rem;
  margin: 0;
  @media only screen 
  and (min-device-width: 1000px) {
      font-size: 1rem;
  line-height: 1.8rem;
  }
`

const Adress = styled.p`
color: #fde300;
font-size 0.7rem;
text-align: left;
width: 100%;
line-height: 1.3rem;
margin: 0;
@media only screen 
  and (min-device-width: 1000px) {
    line-height: 1.8rem;
      font-size: 1rem;
  }
`

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 560px;
  width: 100%;
  margin: 0;
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    line-height: 1.4rem;
  }
  
`

export default function ContactEscritorio () {
  const { pages } = useContext(PagesStateContext)
  const query = useStaticQuery(graphql`
    query {
      contactImg: allFile(
        filter: {
          relativePath: {}
          relativeDirectory: { eq: "images/contact" }
        }
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

    return pages === 'contacto' ? (
      <Wrapper>
        <TextContainer>
          <Title>{data.contact.text}</Title>
          <HorizontalFlex>
            <WaveImage width={"35%"}></WaveImage>
            <div>
              <Link href="mailto:info@mediolleno.es" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                <Subtitle>{data.contact.email}</Subtitle>
              </Link>
              <Link style={{textDecoration:"none"}} to={"https://www.google.es/maps/place/Calle+del+Cerro+Minguete,+112,+28035+Madrid,+Spain/@40.4869974,-3.725528,17z/data=!3m1!4b1!4m5!3m4!1s0xd4229f3348a3bab:0x52ab31dbc691f8ed!8m2!3d40.4869933!4d-3.7233393"}>
                <Adress>{data.contact.adressFirstLine}</Adress>
                <Adress>{data.contact.adressSecondLine}</Adress>
              </Link>
            </div>
          </HorizontalFlex>
        </TextContainer>
        <Img
          style={{ width: "350px", height: "auto", overflow: "inherit" }}
          fluid={query.contactImg.nodes[0].childImageSharp.fluid}
          alt="Modelo de atracción central"
        />
      </Wrapper>
    ) : null
}