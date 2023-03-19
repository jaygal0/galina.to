import React from 'react'
import styled from 'styled-components'
import IconAge from './IconAge'
import IconDeath from './IconDeath'
import IconLocation from './IconLocation'
import IconProfession from './IconProfession'
import IconBook from './IconBook'
import IconAudiobook from './IconAudiobook'
import IconChess from './IconChess'

const Container = styled.div`
  position: relative;
  display: block;
  width: 65vw;
  background: white;
  border: 2px solid black;
  padding: 8.8rem;
  border-radius: 8.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.type.size.body.md};
  max-width: 986px;
  animation: cardFadeIn 2.5s ease-in-out;

  @keyframes cardFadeIn {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: calc(100vw - 4rem);
    padding: 4.8rem;
    border-radius: 3.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: calc(100vw - 4rem);
    padding: 2.4rem;
    border-radius: 2.4rem;
  }

  &.increase-gap {
    gap: 2.4rem;
  }
`
const Square = styled.div`
  &.isIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 56px;
    width: 56px;
    background: ${({ theme }) => theme.color.now.background};
    border: 2px solid black;
    border-radius: 4px;
    top: 80px;
    left: -3%;

    @media screen and (max-width: 426px) {
      height: 40px;
      width: 40px;
      top: -16px;
      left: -4%;
    }
  }
`

const Card = ({
  children,
  padding,
  isIcon,
  age,
  death,
  location,
  profession,
  book,
  audiobook,
  chess,
}: {
  children: any
  padding?: Boolean
  isIcon?: Boolean
  age?: Boolean
  death?: Boolean
  location?: Boolean
  profession?: Boolean
  book?: Boolean
  audiobook?: Boolean
  chess?: Boolean
}) => {
  return (
    <Container className={padding ? 'increase-gap' : ''}>
      {children}
      <Square className={isIcon ? 'isIcon' : ''}>
        {age && <IconAge />}
        {death && <IconDeath />}
        {location && <IconLocation />}
        {profession && <IconProfession />}
        {book && <IconBook />}
        {audiobook && <IconAudiobook />}
        {chess && <IconChess />}
      </Square>
    </Container>
  )
}

export default Card
