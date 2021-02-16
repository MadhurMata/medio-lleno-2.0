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
  width: 640px;
  margin-top: 50px;
`

const ListElement = styled.li`
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
  margin-right: 2rem;
  border-bottom: ${ props => !props.hover &&  props.active ? "3px #fde300 solid" : "none"  };
  font-weight: ${  props => !props.hover && props.active ? "700" : "normal" };
  &:hover  {
    border-bottom: ${ props => props.active ?  "3px #fde300 solid": "3px #fde300 solid" };
    font-weight: 700;
  }
`

const Header = ({ path }) => {
  const node = useRef()
  const [open, setOpen] = useState(false)
  const [notHovered, setNotHovered] = useState(false)
  const { setPages, pages } = useContext(PagesStateContext)
  const [active, setActive] = useState(pages);

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

  const setHover = (page) => {
    setNotHovered(!notHovered)
  }


  const handleOnClick = (page) => {
    setPages(page)
    setActive(page)
  }

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
  console.log('hovered', notHovered)
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
            <ListElement onMouseEnter={() => setNotHovered(true)} onMouseLeave={() => setNotHovered(false)} hover={notHovered} desactive={notHovered} active={active === 'home'} onKeyDown={() => setPages("home")} onClick={() => handleOnClick("home")}>Home</ListElement>
            <ListElement onMouseEnter={() => setNotHovered(true)} onMouseLeave={() => setNotHovered(false)} hover={notHovered} active={active === 'queHacemos'} onKeyDown={() => setPages("queHacemos")} onClick={() => handleOnClick("queHacemos")}>¿Qué hacemos?</ListElement>
            <ListElement onMouseEnter={() => setNotHovered(true)} onMouseLeave={() => setNotHovered(false)} hover={notHovered} active={active === 'modelo'} onKeyDown={() => setPages("modelo")} onClick={() => handleOnClick( "modelo")}>Nuestro modelo</ListElement>
            <ListElement onMouseEnter={() => setNotHovered(true)} onMouseLeave={() => setNotHovered(false)} hover={notHovered} active={active === 'proceso'} onKeyDown={() => setPages("proceso")} onClick={() => handleOnClick( "proceso")}>Nuestro proceso</ListElement>
            <ListElement onMouseEnter={() => setNotHovered(true)} onMouseLeave={() => setNotHovered(false)} hover={notHovered} active={active === 'contacto'} onKeyDown={() => setPages("contacto")} onClick={() => handleOnClick( "contacto")}>Contacto</ListElement>
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
