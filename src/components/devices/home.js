import React from 'react'
import styled from "@emotion/styled"
import WaveAndText from '../waveAndText'

const MainMessage = styled.div`
  display: flex;
  align-items: start-end;
  flex-direction: column;
  color: white;
  margin-top: 50%;
     h1 {
        line-height: 3.3rem;
        font-size: 2.7rem;
        font-family: 'Futura-bold', Fallback, sans-serif;
        font-weight: 500;
        margin: 0;
    } 
`

export default function Home() {
  const text = 'Deberían ser los productos y servicios los que hablen de las marcas y no alrevés.';
  return (
      <div style={{ height: "100vh" }}>
        <MainMessage>
          <h1>Bien hecho</h1>
          <h1>es mejor</h1>
          <h1 style={{  lineHeight: "4.3rem"}}>que bien</h1>
          <h1 style={{  lineHeight: "3.7rem"}}>dicho.</h1>
        </MainMessage>
        <WaveAndText width={"45%"} text={text}></WaveAndText>
      </div>
  )
}
