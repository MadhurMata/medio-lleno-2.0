import React from "react"
import data from "../../metadata/contact"
import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Contact = () => {
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
  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Title id={"contact"} name={"contact"}>
        {data.contact.text}
      </Title>
      <Img
        style={{ margin: "2rem 0", width: "100%", height: "auto" }}
        fluid={query.contactImg.nodes[0].childImageSharp.fluid}
        alt="E.T. image"
      />
      <Subtitle>{data.contact.telephoneNumber}</Subtitle>
      <Subtitle>{data.contact.email}</Subtitle>
      <Adress>{data.contact.adressFirstLine}</Adress>
      <Adress>{data.contact.adressSecondLine}</Adress>
    </Container>
  )
}

export default Contact
