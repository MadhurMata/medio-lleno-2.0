import React from 'react'

import styled from "@emotion/styled"
import WaveImage from '../img-components/waveImage'

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 324px;
  margin-top: 2rem;

  p {
    width: 45%;
    font-size: 0.7rem;
    font-weight: 500;
    color: white;
    line-height: 1rem;
  }
  @media only screen and (min-device-width: 1000px) {
  max-width: 560px;
  margin: 0;
  p {
    width: 50%;
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    line-height: 1.4rem;
  }
  }
`

export default function WaveAndText(props) {
  const { text, width } = props;

  return (
    <HorizontalFlex>
      <WaveImage width={width}></WaveImage>
      <p>{text}</p>
    </HorizontalFlex>
  )
}
