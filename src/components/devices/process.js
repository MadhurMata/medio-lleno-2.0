import React from "react"
import styled from "@emotion/styled"
import ProcessCardList from "../shared/processCardsList"
import WaveImage from "../img-components/waveImage"

const Title = styled.h1`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Futura-bold", Fallback, sans-serif;
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
  const text =
    "Este sistema modular permite adaptarnos con facilidad a cada cliente, optimizar el proceso y buscar la excelencia en cada paso."
  const title =
    "Nuestro proceso de trabajo se divide en 6 etapas independientes."
  return (
    <>
      <Title name={"process"}>{title}</Title>
      <ProcessCardList></ProcessCardList>
      <Text>{text}</Text>
      <CenteredWave>
        <WaveImage width={"45%"}></WaveImage>
      </CenteredWave>
    </>
  )
}
