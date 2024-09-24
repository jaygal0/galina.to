"use client"

import React from 'react'
import styled from 'styled-components'
import Face from './Face'
import Hero from './Hero'

const Container = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  max-width: 1440px;
  padding-left: 12rem;
  align-items: center;

  @media screen and (max-width: 1280px) {
    padding-left: 15rem;
  }

`

const FaceWrapper = styled.div`
  width: 100%;
  transform: translate(-18rem, 5%);
  animation: fadeIn 0.7s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }

  @media screen and (max-width: 1280px) {
    transform: translate(-25rem, 5%);
    width: 30%;
  }

`

const IndexHero = () => {
  return (
    <Container>
      {/* <Hero /> */}
      <FaceWrapper>
        <Face />
      </FaceWrapper>
    </Container>
  )
}

export default IndexHero
