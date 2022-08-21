import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.type.size.title.lg};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.type.weight.bold};
`

const LocationNow = ({ city, country }: { city: string; country: string }) => {
  return <Container>{`${city}, ${country}`}</Container>
}

export default LocationNow