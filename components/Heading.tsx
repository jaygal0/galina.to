"use client"
import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { ExternalLink } from '../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: min-content;
  align-items: center;
  justify-content: center;
  padding-bottom: 8.8rem;
  margin-bottom: 6.4rem;
  max-width: 986px;
  animation: ContainerTransition 1.8s ease-in-out;

  @keyframes ContainerTransition {
    from {
      opacity: 0;
      transform: translateY(8rem);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 100vw;
    padding-bottom: 2.4rem;
  }
`
const Title = styled.h1`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.title.lg};
  font-family: 'DM Sans', sans-serif;
  line-height: ${({ theme }) => theme.type.height.md};
  margin-bottom: 0.8rem;
  text-transform: capitalize;
  letter-spacing: 0.5px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.sm};
  }
`
const Text = styled.p`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  line-height: ${({ theme }) => theme.type.height.lg};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.body.lg};
  }
`
const LastUpdated = styled.p`
  width: 90%;
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.type.size.body.md};
`
const Heading = ({
  title,
  text,
  now,
}: {
  title: string
  text: string
  now?: Date
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {now && (
        <LastUpdated>
          Last Updated: {moment(now).format('MMMM Do YYYY')}. Inspired by{' '}
          <ExternalLink href="https://sive.rs/nowff" target="_blank">
            Derek Sivers
          </ExternalLink>
        </LastUpdated>
      )}
    </Container>
  )
}

export default Heading
