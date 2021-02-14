import React from 'react'

import styled from "@emotion/styled"
import WaveImage from './img-components/waveImage'

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2rem;
  max-width: 560px;
  margin: 0;
  p {
    width: 52%;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    line-height: 1.4rem;
    margin-left: 2rem;
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
