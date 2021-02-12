import React from "react"
import styled from "@emotion/styled"
import QueHacemosCardsList from "../shared/queHacemosCardsList"
import WaveAndText from "./waveAndText"
import WaveImage from "../img-components/waveImage"

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

const Title = styled.h1`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Futura-bold", Fallback, sans-serif;
`

const Text = styled.p`
  color: white;
  font-size 0.8rem;
  text-align: left;
  width: 100%;
`

const CenteredWave = styled.div`
  width: 100%;
  display flex;
  justify-content: center;
  margin: 2rem 0;
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

export default function QueHacemos() {
  const text = 'Siguiendo nuestro modelo, conseguimos reducir la inversión y aumentar el número y la calidad de impactos.';
  const title = 'Desarrollamos productos y servicios como vehículos de comunicación en sí mismos.' 
  return (
    <div name={"queHacemos"}>
      <Devices>
        <Title>{title}</Title>
        <QueHacemosCardsList></QueHacemosCardsList>
        <Text>
          Siguiendo nuestro modelo, conseguimos reducir la inversión y aumentar el
          número y la calidad de impactos
        </Text>
        <CenteredWave>
          <WaveImage width={"45%"}></WaveImage>
        </CenteredWave>
      </Devices>
      <Desktop>
        <Wrapper>
          <TextContainer>
            <Title>{title}</Title>
            <WaveAndText width={"35%"} text={text}></WaveAndText>
          </TextContainer>
          <QueHacemosCardsList></QueHacemosCardsList>
        </Wrapper>
      </Desktop>
    </div>
  )
}
