import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import data from "../../metadata/contact"

const Desktop = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;  
  position: fixed;
  left: 0;
  bottom: 0;
  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 999px) {
  display: none;
}
`

const Devices = styled.div`
  height: 4rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;  
  
    @media only screen 
  and (min-device-width: 1000px) {
    display: none;
}
`

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  justify-content end;
  width: 900px;
`
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  height: 100%;
  align-items: center;
`

const ContainerTexts = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  a {
    color: #13c1b5;
    margin-left: 2rem;
    margin-bottom: 0;

  }
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7rem;
`

const Footer = () => {
  const mediaLinks  = ["info@mediolleno.es", "https://www.linkedin.com/company/medio-lleno"]
  const media = ["Email", "LinkedIn"]
  const query = useStaticQuery(graphql`
    query {
      footerImg: allFile(
        filter: { relativePath: {} relativeDirectory: { eq: "images/footer" }}
      ) {
        nodes {
          childImageSharp {
            fixed(width: 40, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <footer id={"footer"} name={"footer"}>
      <Devices>
        <Container>
              <ImgContainer>
                <Link href="mailto:info@mediolleno.es" target="_blank" rel="noopener noreferrer">
                  <Img
                    fixed={query.footerImg.nodes[1].childImageSharp.fixed}
                    alt={`${media[0]} logo`}/>
                </Link>
                <Link href={mediaLinks[1]} style={{ textDecoration: `none` }}>
                  <Img
                    fixed={query.footerImg.nodes[0].childImageSharp.fixed}
                    alt={`${media[1]} logo`}/>
                </Link>
              </ImgContainer>
        </Container>
      </Devices>
      <Desktop>
        <WrapperContainer>
            <Link style={{ margin: "0 500px 0 0", fontSize: "0.8rem", color: "#13c1b5", textDecoration:"none" }} href="mailto:info@mediolleno.es" target="_blank" rel="noopener noreferrer">
              {data.contact.email}
            </Link>
          <Container>
            <ImgContainer>
              <Link href="mailto:info@mediolleno.es" target="_blank" rel="noopener noreferrer">
                <Img
                  fixed={query.footerImg.nodes[1].childImageSharp.fixed}
                  alt={`${media[0]} logo`}/>
              </Link>
              <Link href={mediaLinks[1]} style={{ textDecoration: `none` }}>
                <Img
                  fixed={query.footerImg.nodes[0].childImageSharp.fixed}
                  alt={`${media[1]} logo`}/>
              </Link>
            </ImgContainer>
          </Container>
        </WrapperContainer>
      </Desktop>
    </footer>
  )
}

export default Footer
