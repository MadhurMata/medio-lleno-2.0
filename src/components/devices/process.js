import React from 'react'
import styled from "@emotion/styled"
import ProcessCardList from '../shared/processCardsList'
import WaveImage from '../img-components/waveImage'
import WaveAndText from './waveAndText'

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

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem;
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
  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Futura-bold', Fallback, sans-serif;
`

const Text = styled.p`
font-size 0.8rem;
color: white;
text-align: left;
width: 100%;
`

const CenteredWave = styled.div`
  width: 100%;
  display flex;
  justify-content: center;
  margin: 2rem 0;
`

export default function Process() {
  const text = 'Este sistema modular permite adaptarnos con facilidad a cada cliente, optimizar el proceso y buscar la excelencia en cada paso.'
  const title = 'Nuestro proceso de trabajo se divide en 6 etapas independientes.'
  return (
    <div name={"process"}>
      <Devices>
        <Title>{title}</Title>
        <ProcessCardList></ProcessCardList>
        <Text>{text}</Text>
        <CenteredWave>
          <WaveImage width={"45%"}></WaveImage>
        </CenteredWave>
      </Devices>
      <Desktop>
        <Wrapper>
          <TextContainer>
            <Title>{title}</Title>
            <WaveAndText text={text}></WaveAndText>
          </TextContainer>
          <ProcessCardList></ProcessCardList>
        </Wrapper>
      </Desktop>
    </div>
  )
}
