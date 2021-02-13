import React, { useContext } from 'react'
import styled from "@emotion/styled"
import QueHacemosCardsList from "../shared/queHacemosCardsList"
import WaveAndText from "../waveAndText"
import { PagesStateContext } from '../layout'

const Title = styled.h1`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Futura-bold", Fallback, sans-serif;
`

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
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

