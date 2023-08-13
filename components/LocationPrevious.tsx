import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Location = styled.div`
  display: inline;
  width: 100%;
  color: ${({ theme }) => theme.color.alt};
  font-size: ${({ theme }) => theme.type.size.body.lg};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  text-transform: capitalize;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.sm};
  }
`
const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.type.size.body.lg};
  font-weight: ${({ theme }) => theme.type.weight.normal};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.sm};
  }
`

const LocationPrevious = ({
  city,
  country,
  date,
}: {
  city: string
  country: string
  date: string
}) => {
  return (
    <Container>
      <Location>
        {city}, {country}
      </Location>{' '}
      on {moment(date).format('MMM Do YYYY')}
    </Container>
  )
}

export default LocationPrevious
