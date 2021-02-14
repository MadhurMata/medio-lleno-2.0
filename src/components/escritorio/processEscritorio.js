import React, { useContext } from 'react'
import WaveAndText from '../waveAndText'
import { PagesStateContext } from '../layout'
import ProcessCardListEscritorio from "./ProcessCardListEscritorio"
import { Title, Wrapper, TextContainer } from "../../styles/styles"

export default function ProcessEscritorio() {
  const { pages } = useContext(PagesStateContext)
  const text = 'Este sistema modular permite adaptarnos con facilidad a cada cliente, optimizar el proceso y buscar la excelencia en cada paso.'
  const title = 'Nuestro proceso de trabajo se divide en 6 etapas independientes.'

  return pages === 'proceso' ? (
          <Wrapper>
            <TextContainer>
              <Title>{title}</Title>
              <WaveAndText width={"196px"} text={text}></WaveAndText>
            </TextContainer>
            <ProcessCardListEscritorio></ProcessCardListEscritorio>
          </Wrapper>
      ) : null
}
