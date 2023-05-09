import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import moment from 'moment'

const Container = styled.div`
  width: 65vw;
  /* background: ${(prop) => prop.color}; */
  border: 2px solid black;
  border-radius: 8.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.type.size.body.md};
  max-width: 986px;
  height: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: 7.2rem;
  position: relative;
  transition: all ease-in-out 0.2s;
  box-shadow: 15px 15px 0 -3px #c6d0e1;
  top: -7px;
  left: -7px;
  animation: projectCardFadeIn 2.5s ease-in-out;

  @keyframes projectCardFadeIn {
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
    height: 14px;
    border-radius: 3.2rem;
    min-height: 30vh;
    margin-bottom: 4.8rem;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px #c6d0e1;
    top: 0;
    left: 0;
  }

  &:active {
    transform: scale(0.99);
  }
`
const Heading = styled.h2`
  font-size: ${({ theme }) => theme.type.size.title.md};
  margin-bottom: -1.6rem;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 100vw;
    height: 20vw;
  }
`
const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.lg};
`
const Posted = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.md};
`
const Modified = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.md};
`
const Category = styled.h5`
  text-transform: capitalize;
  border: 1px solid black;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.sm};
`

const CardBlog = ({
  link,
  title,
  subtitle,
  posted,
  updated,
  tags,
  category,
}: {
  link: string
  title: string
  subtitle: string
  posted: string
  updated?: string
  tags?: string
  category: string
}) => {
  console.log(`this is posted: ${posted} this is updated: ${updated}`)

  return (
    <Link href={`/blog/${link}`}>
      <Container>
        <Heading>{title}</Heading>
        <Subtitle>{subtitle}</Subtitle>
        {updated == undefined ? (
          <Posted>Posted on: {moment(posted).format('MMM Do, yyy')}</Posted>
        ) : (
          <>
            <Posted>
              Originally posted on: {moment(posted).format('MMM Do, yyy')}
            </Posted>
            <Modified>
              Updated on: {moment(updated).format('MMM Do, yyy')}
            </Modified>
          </>
        )}
        <Category>{category}</Category>
      </Container>
    </Link>
  )
}

export default CardBlog
