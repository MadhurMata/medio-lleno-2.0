import React from 'react'

import styled from "@emotion/styled"
import WaveAndText from '../waveAndText'

const Desktop = styled.div`
  @media only screen and (max-device-width: 999px) {
    display: none;
  }
`
const Devices = styled.div`
  @media only screen and (min-device-width: 1000px) {
    display: none;
  }
`

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
  margin-top: 50%;
     h1 {
        line-height: 3.3rem;
        font-size: 2.7rem;
        font-family: 'Futura-bold', Fallback, sans-serif;
        font-weight: 500;
        margin: 0;
    } 
  
  @media only screen 
  and (min-device-width: 1000px) {
    margin-top: 0;
    h1 {
      margin: 0;
      font-family: 'Futura-bold', Fallback, sans-serif;
      line-height: 4.8rem;
      font-size: 4.6rem;
    } 
  }
`

export default function Home() {
  const text = 'Deberían ser los productos y servicios los que hablen de las marcas y no alrevés.';
  return (
    <>
      <Devices style={{ height: "100vh" }}>
        <MainMessage>
          <h1>Bien hecho</h1>
          <h1>es mejor</h1>
          <h1 style={{  lineHeight: "4.3rem"}}>que bien</h1>
          <h1 style={{  lineHeight: "3.7rem"}}>dicho.</h1>
        </MainMessage>
        <WaveAndText width={"45%"} text={text}></WaveAndText>
      </Devices>
      <Desktop>
        <Container>
          <MainMessage>
            <h1 style={{  lineHeight: "5.2rem",   marginTop: "20%"
            }}>Bien hecho</h1>
            <h1 style={{  lineHeight: "4.3rem"}}>es mejor que</h1>
            <h1 style={{  lineHeight: "7.8rem"}}>bien dicho.</h1>
            <div style={{  marginTop: "4rem"}}>
            </div>
          </MainMessage>
          <WaveAndText width={"40%"} text={text}></WaveAndText>
        </Container>
      </Desktop>
    </>
  )
}
