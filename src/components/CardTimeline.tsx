import React, { useRef, useEffect } from 'react'
import moment from 'moment'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 986px;
  width: 90vw;
  height: min-content;
  position: relative;
  z-index: 1;
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
    align-items: flex-start;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    margin-bottom: 4rem;
  }

  &:hover {
    cursor: pointer;
  }
`
const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.color.timeline.background};
`
const DashedLine = styled.div`
  border-left: 2px dashed black;
  width: min-content;
  position: absolute;
  height: 100%;
  top: 0;
  left: 70px;
  z-index: -1;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    display: none;
  }

  &.start {
    height: 50%;
    top: 50%;
  }
`
const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
const DatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 70px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: row;
    align-items: center;
  }
`
const Month = styled.div`
  font-size: ${({ theme }) => theme.type.size.body.lg};
  font-weight: ${({ theme }) => theme.type.weight.bold};
`
const Year = styled.div`
  font-size: ${({ theme }) => theme.type.size.body.md};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.body.lg};
  }
`
const Card = styled.div`
  background: ${({ theme }) => theme.color.timeline.box};
  border: 2px solid black;
  padding: 8.8rem;
  border-radius: 8.8rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.type.size.body.md};
  flex-grow: 1;
  height: min-content;
  transition: all ease-in-out 0.5s;
  box-shadow: 0px 0px 3px #c6d0e1;
  top: 0;
  left: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    margin-bottom: 1.2rem;
    border-radius: 4.8rem;
    padding: 5.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 2.4rem;
    border-radius: 2.4rem;
  }

  &.isClicked {
    gap: ${({ theme }) => theme.spacing.md};
    &:hover {
      cursor: pointer;
      box-shadow: 15px 15px 0 -3px #c6d0e1;
      top: -7px;
      left: -7px;
    }
  }
`
const Heading = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: ${({ theme }) => theme.type.size.title.md};
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.sm};
  }
`
const Desc = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.type.size.body.lg};
  line-height: ${({ theme }) => theme.type.height.md};
  transition: all 0.5s ease-in-out;
  opacity: 0;
  height: 0;

  &.isClicked {
    height: 100%;
    opacity: 1;
  }
`
const ImageWrapper = styled.div`
  width: 0%;
  opacity: 0;
  transition: all ease-in-out 0.5s;

  &.isClicked {
    width: 100%;
    opacity: 1;
  }
`
const Expand = styled.button`
  font-size: ${({ theme }) => theme.type.size.body.md};
  align-self: flex-start;
  padding-top: 10%;
  background: none;
  border: none;
  opacity: 0;
  transition: opacity ease-in-out 0.5s;
  width: 2rem;

  &.hover {
    cursor: pointer;
    opacity: 1;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    display: none;
  }
`

const Timeline = ({
  start,
  heading,
  desc,
  date,
  category,
  image,
  buttonText,
  buttonLink,
}: {
  start?: Boolean
  heading: string
  desc: string
  date: string
  category: string
  image?: string
  buttonText?: string
  buttonLink?: string
}) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false)
  const [isClicked, setIsClicked] = useState<Boolean>(false)

  return (
    <Container
      onMouseEnter={() => {
        setIsHovered(!isHovered)
      }}
      onMouseLeave={() => {
        setIsHovered(!isHovered)
      }}
      onClick={() => {
        setIsClicked(!isClicked)
      }}
    >
      <Date>
        <DateWrapper>
          <Image
            src={
              category == 'career'
                ? '/work.svg'
                : category == 'education'
                ? '/education.svg'
                : '/placeholder-timeline.svg'
            }
            width={48}
            height={48}
            alt={category}
          />
          <DatesWrapper>
            <Month>{moment(date).format('MMM')}</Month>
            <Year>{moment(date).format('YYYY')}</Year>
          </DatesWrapper>
        </DateWrapper>
      </Date>
      <DashedLine className={start && 'start'} />
      <Card className={isClicked && 'isClicked'}>
        <Heading>{heading}</Heading>
        <Desc className={isClicked && 'isClicked'}>
          {desc}
          {buttonText && <Button cta={buttonText} link={buttonLink} />}
        </Desc>

        {image ? (
          <ImageWrapper className={isClicked && 'isClicked'}>
            <Image
              src={`${image}`}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              alt={image}
            />
          </ImageWrapper>
        ) : null}
      </Card>
      <Expand className={isHovered && 'hover'}>
        {isClicked ? 'collapse' : 'expand'}
      </Expand>
    </Container>
  )
}

export default Timeline
