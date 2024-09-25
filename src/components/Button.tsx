import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.color.button.primary.background};
  color: ${({ theme }) => theme.color.button.primary.text};
  font-size: ${({ theme }) => theme.type.size.body.lg};
  text-transform: capitalize;
  width: max-content;
  outline: none;
  border: none;
  border-radius: 0.4rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(120%);
  }

  &.secondary {
    background: none;
    outline: 2px ${({ theme }) => theme.color.button.primary.background} solid;
    outline-offset: -1px;
    color: ${({ theme }) => theme.color.button.primary.background};
    transition: all 0.4s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.color.button.primary.background};
      color: ${({ theme }) => theme.color.button.primary.text};
    }
  }
`
const ALink = styled.a`
  &.flex-start {
    align-self: flex-start;
    margin-left: 3.2rem;

    @media screen and (max-width: 1024) {
      margin-left: 2.4rem;
    }
  }
`

const Button = ({
  cta,
  link,
  flex,
  secondary,
}: {
  cta: string
  link?: string
  flex?: Boolean
  secondary?: Boolean
}) => {
  return (
    <ALink href={link} target="_blank" className={flex && 'flex-start'}>
      <Container className={secondary && 'secondary'}>{cta}</Container>
    </ALink>
  )
}

export default Button
