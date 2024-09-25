import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.type.size.title.lg};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.type.weight.bold};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.sm};
  }
`

const ProfessionNow = ({ job, company }: { job: string; company: string }) => {
  return <Container>{`${job} - ${company}`}</Container>
}

export default ProfessionNow
