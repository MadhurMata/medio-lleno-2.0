import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/devices/contact"

import styled from "@emotion/styled"
import QueHacemos from "../components/devices/queHacemos"
import Process from "../components/devices/process"
import Model from "../components/devices/model"
import Home from "../components/devices/home/home"

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem;
  @media only screen and (max-device-width: 999px) {
    display: none;
  }
`
const Devices = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-device-width: 1000px) {
    display: none;
  }
`

const IndexPage = () => {
  
    return (
      <Layout>
        <SEO title={"Medio Lleno"}/>
        <div name={"home"}>
          <Devices>
            <Home></Home>
            <QueHacemos></QueHacemos>
            <Model></Model>
            <Process></Process>
            <Contact></Contact>
          </Devices>
          <Desktop>
            <Home></Home>
          </Desktop>
        </div>
      </Layout>
    )

}

export default IndexPage
