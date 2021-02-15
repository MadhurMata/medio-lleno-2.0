import styled from "@emotion/styled"

// Shared

export const Title = styled.h1`
  color: white;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Futura-bold", Fallback, sans-serif;

  @media only screen 
  and (min-device-width: 1000px) {
      font-size: 2.5rem;    
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
`

// Desktop

export const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop || "17%"}
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 500px;
  min-width: 550px;
`

// Devices

export const Text = styled.p`
  color: white;
  font-size 0.8rem;
  text-align: left;
  width: 100%;
  margin: 0;
`

export const CenteredWave = styled.div`
  width: 100%;
  display flex;
  justify-content: center;
  margin: 3rem 0;
`

