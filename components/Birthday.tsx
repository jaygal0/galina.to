import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.type.size.body.lg};
`
const Label = styled.h4``

const Birthday = () => {
  return (
    <Wrapper>
      <Label> All birthday posts</Label>
      <Container>
        <Link href="/blog/32">32 /</Link>
        <Link href="/blog/33">33 /</Link>
        <Link href="/blog/34">34 /</Link>
        <Link href="/blog/35">35 /</Link>
        {/* <Link href="/blog/36">36 /</Link> */}
        {/* <Link href="/blog/37">37 /</Link> */}
        {/* <Link href="/blog/38">38 /</Link> */}
        {/* <Link href="/blog/39">39 /</Link> */}
        {/* <Link href="/blog/40">40 /</Link> */}
      </Container>
    </Wrapper>
  )
}

export default Birthday
