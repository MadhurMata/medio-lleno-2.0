import React from 'react'
import styled from "@emotion/styled"
import WaveImage from '../img-components/waveImage'
import {Text } from "../../styles/styles"


const MainMessage = styled.div`
  display: flex;
  align-items: start-end;
  flex-direction: column;
  color: white;
  margin-bottom: 1rem;
     h1 {
        line-height: 3.3rem;
        font-size: 2.7rem;
        font-family: 'Futura-bold', Fallback, sans-serif;
        font-weight: 500;
        margin: 0;
    } 
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-top: 20%;
  min-height: 450px;
  height: 100vh;
  width: 100%;
  max-width: 500px;
`

const OnlyMobile = styled.div`
  @media only screen and (min-device-width: 396px) and (max-device-width: 999px) {
    display: none;
  }
`

const BetweenDevices = styled.div`
  @media only screen and (max-device-width: 395px) {
    display: none;
  }
`
const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2rem;
  max-width: 560px;
  margin: 0;
  p {
    width: 52%;
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    line-height: 1.4rem;
    margin-left: 1rem;
  }

`


export default function Home() {
  const text = 'Deberían ser los productos y servicios los que hablen de las marcas y no al revés.';
  return (
      <Container>
        <BetweenDevices>
          <MainMessage>
            <h1>Bien hecho es</h1>
            <h1>mejor que</h1>
            <h1 style={{  lineHeight: "4.3rem"}}>bien dicho.</h1>
          </MainMessage>
        </BetweenDevices>
        <OnlyMobile>
          <MainMessage>
            <h1>Bien hecho</h1>
            <h1>es mejor</h1>
            <h1 style={{  lineHeight: "4.3rem"}}>que bien</h1>
            <h1 style={{  lineHeight: "3.7rem"}}>dicho.</h1>
          </MainMessage>
        </OnlyMobile>
        <HorizontalFlex>
          <WaveImage width={"45%"}></WaveImage>
          <Text>{text}</Text>
        </HorizontalFlex>
      </Container>
  )
}
