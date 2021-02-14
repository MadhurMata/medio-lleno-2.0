import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

import Contact from "../components/devices/contact"
import QueHacemos from "../components/devices/queHacemos"
import Process from "../components/devices/process"
import Model from "../components/devices/model"
import Home from "../components/devices/home"
import ContactEscritorio from "../components/escritorio/contactEscritorio"
import HomeEscritorio from "../components/escritorio/homeEscritorio"
import QueHacemosEscritorio from "../components/escritorio/queHacemosEscritorio"
import ModelEscritorio from "../components/escritorio/modelEscritorio"
import ProcessEscritorio from "../components/escritorio/processEscritorio"

const Desktop = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  height: 100vh;

  @media only screen and (max-device-width: 999px) {
    display: none;
  }
`

const Devices = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
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
            <HomeEscritorio></HomeEscritorio>
            <QueHacemosEscritorio></QueHacemosEscritorio>
            <ModelEscritorio></ModelEscritorio>
            <ProcessEscritorio></ProcessEscritorio>
            <ContactEscritorio></ContactEscritorio>
          </Desktop>
        </div>
      </Layout>
    )

}

export default IndexPage
