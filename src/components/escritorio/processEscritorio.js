import React, { useContext } from 'react'
import WaveAndText from '../waveAndText'
import { PagesStateContext } from '../layout'
import ProcessCardList from "../shared/processCardsList"
import { Title, Wrapper, TextContainer } from "../../styles/styles"

export default function ProcessEscritorio() {
  const { pages } = useContext(PagesStateContext)
  const text = 'Este sistema modular permite adaptarnos con facilidad a cada cliente, optimizar el proceso y buscar la excelencia en cada paso.'
  const title = 'Nuestro proceso de trabajo se divide en 6 etapas independientes.'

  return pages === 'proceso' ? (
          <Wrapper marginTop={ "13%" }>
            <TextContainer>
              <Title>{title}</Title>
              <WaveAndText width={"196px"} text={text}></WaveAndText>
            </TextContainer>
            <ProcessCardList></ProcessCardList>
          </Wrapper>
      ) : null
}
