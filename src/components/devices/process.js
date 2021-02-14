import React from "react"
import ProcessCardList from "../shared/processCardsList"
import WaveImage from "../img-components/waveImage"
import { Title, Text, CenteredWave } from "../../styles/styles"

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
