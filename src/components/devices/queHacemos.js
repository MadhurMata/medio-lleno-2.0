import React from "react"
import styled from "@emotion/styled"
import QueHacemosCardsList from "../shared/queHacemosCardsList"
import WaveImage from "../img-components/waveImage"

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

export default function QueHacemos() {
  const text =
    "Siguiendo nuestro modelo, conseguimos reducir la inversión y aumentar el número y la calidad de impactos."
  const title =
    "Desarrollamos productos y servicios como vehículos de comunicación en sí mismos."
  return (
    <>
      <Title name={"queHacemos"}>{title}</Title>
      <QueHacemosCardsList></QueHacemosCardsList>
      <Text>
        Siguiendo nuestro modelo, conseguimos reducir la inversión y aumentar el
        número y la calidad de impactos
      </Text>
      <CenteredWave>
        <WaveImage width={"45%"}></WaveImage>
      </CenteredWave>
    </>
  )
}
