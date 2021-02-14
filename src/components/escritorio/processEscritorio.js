import React, { useContext } from 'react'
import styled from "@emotion/styled"
import ProcessCardList from '../shared/processCardsList'
import WaveAndText from '../waveAndText'
import { PagesStateContext } from '../layout'

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

const Title = styled.h1`
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Futura-bold', Fallback, sans-serif;
`

export default function ProcessEscritorio() {
  const { pages } = useContext(PagesStateContext)
  const text = 'Este sistema modular permite adaptarnos con facilidad a cada cliente, optimizar el proceso y buscar la excelencia en cada paso.'
  const title = 'Nuestro proceso de trabajo se divide en 6 etapas independientes.'

  return pages === 'proceso' ? (
          <Wrapper>
            <TextContainer>
              <Title>{title}</Title>
              <WaveAndText width={"35%"} text={text}></WaveAndText>
            </TextContainer>
            <ProcessCardList></ProcessCardList>
          </Wrapper>
      ) : null
}
