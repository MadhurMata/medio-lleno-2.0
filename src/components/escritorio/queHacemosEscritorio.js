import React, { useContext } from 'react'
import QueHacemosCardsList from "../shared/queHacemosCardsList"
import WaveAndText from "../waveAndText"
import { PagesStateContext } from '../layout'
import { Title, Wrapper, TextContainer } from "../../styles/styles"

export default function QueHacemosEscritorio() {
  const { pages } = useContext(PagesStateContext)
  const text = 'Siguiendo nuestro modelo, conseguimos reducir la inversión y aumentar el número y la calidad de impactos.';
  const title = 'Desarrollamos productos y servicios como vehículos de comunicación en sí mismos.' 

  return pages === 'queHacemos' ? (
            <Wrapper marginTop={ "30vh" }>
              <TextContainer>
                <Title>{title}</Title>
                <WaveAndText width={"31%"} text={text}></WaveAndText>
              </TextContainer>
              <QueHacemosCardsList></QueHacemosCardsList>
            </Wrapper>
          ) : null
}

