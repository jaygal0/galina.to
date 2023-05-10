import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Logo from './Logo'

const NavContainer = styled.nav`
  position: relative;
  z-index: 99;
`
const Breadcrumb = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  top: 2.4rem;
  left: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`
const Divider = styled.div`
  font-size: ${({ theme }) => theme.type.size.body.md};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  color: ${({ theme }) => theme.color.text};
`
const Breadcrumbs = styled.div`
  font-size: ${({ theme }) => theme.type.size.body.lg};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  color: ${({ theme }) => theme.color.text};
  text-transform: capitalize;

  &.third-level {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`
const Menu = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  top: 2.4rem;
  right: 2.4rem;

  &:hover {
    cursor: pointer;
  }
`
const Now = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  bottom: 2.4rem;
  left: 2.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    display: none;
  }
`
const UnofficeHours = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    display: none;
  }
`

interface Div {
  color?: any
}
const SlideOutMenu = styled.div<Div>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.type.size.display.sm};
  background: ${(props) =>
    props.color == 'home'
      ? '#FFFDFB'
      : props.color == 'projects'
      ? '#EEF1F6'
      : props.color == 'timeline'
      ? '#DBE7E4'
      : props.color == 'blog'
      ? '#D6E2E9'
      : '#FFE5D9'};
  height: 100vh;
  width: 100vw;
  transition: all 0.5s ease-in-out;
  transform: translateY(-200%);
  z-index: 2;
  position: fixed;

  &.active {
    transform: translateY(-0);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.md};
  }
`
const ColorDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
  &.responsive {
    display: none;

    @media screen and (max-width: 1024px) {
      display: block;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: min-content;
  font-family: 'Krona One', sans-serif;
  text-transform: capitalize;
  position: relative;
`

const Close = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  &:hover {
    cursor: pointer;
  }
`

export const Navigation = () => {
  const [isOffSet, setIsOffSet] = useState<boolean>(false)
  const [backgroundColor, IsBackgroundColor] = useState<string>('')
  const [isProjects, setIsProjects] = useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    if (router.asPath.includes('projects')) {
      setIsProjects(!isProjects)
    }
  }, [])

  const now = 'now'
  const timeline = 'timeline'
  const projects = 'projects'
  const contact = 'contact'
  const unofficeHours = 'unoffice-hours'

  return (
    <NavContainer>
      <Breadcrumb>
        <Logo />
        {router.asPath == `/${now}` && (
          <>
            <Divider>/</Divider>
            <Breadcrumbs>
              <Link href={`${now}`}>{now}</Link>
            </Breadcrumbs>
          </>
        )}
        {router.asPath == `/${timeline}` && (
          <>
            <Divider>/</Divider>
            <Breadcrumbs>
              <Link href={`${timeline}`}>{timeline}</Link>
            </Breadcrumbs>
          </>
        )}{' '}
        {isProjects && (
          <>
            <Divider>/</Divider>
            <Breadcrumbs>
              <Link href="/projects">{projects}</Link>
            </Breadcrumbs>
            <Divider>/</Divider>
            <Breadcrumbs className="third-level">
              <Link href={`${router.asPath}`}>
                {router.asPath
                  .replace(/[|&;$%@"<>()+,/]/g, '')
                  .replace('projects', '')}
              </Link>
            </Breadcrumbs>
          </>
        )}
        {router.asPath == `/${unofficeHours}` && (
          <>
            <Divider>/</Divider>
            <Breadcrumbs>
              <Link href={`${unofficeHours}`}>{'Unoffice Hours'}</Link>
            </Breadcrumbs>
          </>
        )}
        {router.asPath == `/${contact}` && (
          <>
            <Divider>/</Divider>
            <Breadcrumbs>
              <Link href={`${contact}`}>{contact}</Link>
            </Breadcrumbs>
          </>
        )}
      </Breadcrumb>
      <Menu
        onClick={() => {
          setIsOffSet(!isOffSet)
        }}
      >
        Menu
      </Menu>
      <Now>
        <Link href="/now">/now</Link>
      </Now>
      <UnofficeHours>
        <Link href="/blog">Blog</Link>
      </UnofficeHours>

      {/* ////////////////// SLIDE OUT MENU ///////////////// */}

      <SlideOutMenu
        color={
          backgroundColor == 'home'
            ? 'home'
            : backgroundColor == 'projects'
            ? 'projects'
            : backgroundColor == 'timeline'
            ? 'timeline'
            : backgroundColor == 'blog'
            ? 'blog'
            : ''
        }
        className={isOffSet ? 'active' : ''}
      >
        <Close
          onClick={() => {
            setIsOffSet(!isOffSet)
          }}
        >
          Close
        </Close>
        <Wrapper
          onClick={() => {
            setIsOffSet(!isOffSet)
          }}
        >
          <Link href="/">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('home')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              home
            </ColorDiv>
          </Link>
          <Link href="/projects">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('projects')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              projects
            </ColorDiv>
          </Link>
          <Link href="/timeline">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('timeline')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              timeline
            </ColorDiv>
          </Link>{' '}
          <Link href="/contact">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('blog')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              Contact
            </ColorDiv>
          </Link>{' '}
          {/* <Link href="/unoffice-hours">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('timeline')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              Unoffice-hours
            </ColorDiv>
          </Link>{' '} */}
          {/* ////////////////// RESPONSIVE DESIGN ///////////////// */}
          <Link href="/blog">
            <ColorDiv className="responsive">Blog</ColorDiv>
          </Link>
          <Link href="/now">
            <ColorDiv className="responsive">Now</ColorDiv>
          </Link>
          {/* <Link href="/unoffice-hours">
            <ColorDiv className="responsive">UnOffice hours</ColorDiv>
          </Link> */}
        </Wrapper>
      </SlideOutMenu>
    </NavContainer>
  )
}
