import React from "react"
import QueHacemosCardsList from "../shared/queHacemosCardsList"
import WaveImage from "../img-components/waveImage"
import { Title, Text, CenteredWave } from "../../styles/styles"

export default function QueHacemos() {
  const text =
    "Siguiendo nuestro modelo, conseguimos reducir la inversión y aumentar el número y la calidad de impactos."
  const title =
    "Desarrollamos productos y servicios como vehículos de comunicación en sí mismos."
  return (
    <>
      <Title name={"queHacemos"}>{title}</Title>
      <QueHacemosCardsList></QueHacemosCardsList>
      <Text>{text}</Text>
      <CenteredWave>
        <WaveImage width={"45%"}></WaveImage>
      </CenteredWave>
    </>
  )
}
