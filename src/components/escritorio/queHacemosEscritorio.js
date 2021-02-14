import React, { useContext } from 'react'
import styled from "@emotion/styled"
import QueHacemosCardsList from "../shared/queHacemosCardsList"
import WaveAndText from "../waveAndText"
import { PagesStateContext } from '../layout'
import { Title, Wrapper, TextContainer } from "../../styles/styles"

export default function QueHacemosEscritorio() {
  const { pages } = useContext(PagesStateContext)
  const text = 'Siguiendo nuestro modelo, conseguimos reducir la inversión y aumentar el número y la calidad de impactos.';
  const title = 'Desarrollamos productos y servicios como vehículos de comunicación en sí mismos.' 

  return pages === 'queHacemos' ? (
            <Wrapper>
              <TextContainer>
                <Title>{title}</Title>
                <WaveAndText width={"35%"} text={text}></WaveAndText>
              </TextContainer>
              <QueHacemosCardsList></QueHacemosCardsList>
            </Wrapper>
          ) : null
}

