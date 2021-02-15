import React, { useContext } from 'react'

import styled from "@emotion/styled"
import WaveAndText from '../waveAndText'
import { PagesStateContext } from '../layout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
  padding-left: 100px;
`

const MainMessage = styled.div`
  display: flex;
  align-items: start-end;
  flex-direction: column;
  color: white;
  margin-top: 0;
    h1 {
      margin: 0;
      font-family: 'Futura-bold', Fallback, sans-serif;
      font-weight: 500;
      line-height: 4.8rem;
      font-size: 4.6rem;
    } 

`

export default function HomeEscritorio() {
  const text = 'Deberían ser los productos y servicios los que hablen de las marcas y no al revés.';
  const { pages } = useContext(PagesStateContext)

  return pages === 'home' ? (
            <Container>
              <MainMessage>
                <h1 style={{  lineHeight: "5.2rem", marginTop: "30%" }}>Bien hecho</h1>
                <h1 style={{  lineHeight: "4.3rem"}}>es mejor que</h1>
                <h1 style={{  lineHeight: "7.8rem"}}>bien dicho.</h1>
              </MainMessage>
              <WaveAndText width={"40%"} text={text}></WaveAndText>
            </Container>
        ) : null
}

