import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import React, { useEffect, useRef, useState, useContext } from "react"
import { PagesStateContext } from '../layout'

import Burger from "../burger"
import Menu from "./menu"

const Desktop = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 999px) {
    display: none;
  }
`
const Devices = styled.div`
  padding-left: 1rem;
  @media only screen and (min-device-width: 1000px) {
    display: none;
  }
`
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 112;
  background-color: #13c1b5;
  width: 900px;
  @media only screen and (max-device-width: 999px) {
    width: 100vw;
  }
`

const NavBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  width: 620px;
  margin-top: 50px;

  li {
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    margin-right: 2rem;

    &:hover {
      border-bottom: 3px #fde300 solid;
      font-weight: 700;
    }
  }
`

const Header = ({ path }) => {
  const node = useRef()
  const [open, setOpen] = useState(false)
  const { setPages } = useContext(PagesStateContext)

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  const query = useStaticQuery(graphql`
    query {
      headerImg: allFile(
        filter: { relativePath: {}, relativeDirectory: { eq: "images/header" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Devices>
          <HeaderContainer>
            <Link to="/" style={{ textDecoration: `none` }}>
              <Img
                style={{ width: "7rem", height: "5rem" }}
                fluid={query.headerImg.nodes[0].childImageSharp.fluid}
                alt="Medio Lleno logo"
              />
            </Link>
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu
                open={open}
                setOpen={setOpen}
                img={query.headerImg.nodes[1].childImageSharp.fluid}
              />
            </div>
          </HeaderContainer>
      </Devices>
      <Desktop>
        <HeaderContainer>
          <Link to="/" style={{ textDecoration: `none` }}>
            <Img
              style={{ width: "7rem", height: "5rem" }}
              fluid={query.headerImg.nodes[0].childImageSharp.fluid}
              alt="Medio Lleno logo"
            />
          </Link>
          <NavBar>
            <li onKeyDown={() => setPages("home")} onClick={() => setPages("home")}>Home</li>
            <li onKeyDown={() => setPages("queHacemos")} onClick={() => setPages("queHacemos")}>¿Qué hacemos?</li>
            <li onKeyDown={() => setPages("modelo")} onClick={() => setPages( "modelo")}>Nuestro modelo</li>
            <li onKeyDown={() => setPages("proceso")} onClick={() => setPages( "proceso")}>Nuestro proceso</li>
            <li onKeyDown={() => setPages("contacto")} onClick={() => setPages( "contacto")}>Contacto</li>
          </NavBar>
        </HeaderContainer>
      </Desktop> 
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
