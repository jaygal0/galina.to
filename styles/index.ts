import styled from 'styled-components'

export const IndexMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  position: absolute;
  padding-top: 35vh;
  padding-bottom: 13.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding-top: 20vh;
  }

  &.home {
    background: ${({ theme }) => theme.color.home.background};
    padding-top: 20vh;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: none;
    height: 100vh;
  }
  &.projects {
    background: ${({ theme }) => theme.color.projects.background};
  }
  &.timeline {
    background: ${({ theme }) => theme.color.timeline.background};
  }
  &.blog {
    background: ${({ theme }) => theme.color.blog.background};
  }
  &.blogPost {
    background: ${({ theme }) => theme.color.blog.background};
    padding-top: 35vh;
    align-items: flex-start;
    padding-left: 25vw;
    padding-right: 25vw;
    gap: 1.6rem;
    font-size: ${({ theme }) => theme.type.size.body.lg};
    line-height: ${({ theme }) => theme.type.height.lg};

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      padding-top: 35vh;
      padding-left: ${({ theme }) => theme.spacing.md};
      padding-right: ${({ theme }) => theme.spacing.md};
    }

    & h1 {
      line-height: ${({ theme }) => theme.type.height.md};
    }
    & h2 {
      line-height: ${({ theme }) => theme.type.height.lg};
    }
    & ol {
      margin-left: ${({ theme }) => theme.spacing.md};

      & li {
        margin-bottom: ${({ theme }) => theme.spacing.xs};
      }
    }
    & p {
      margin-bottom: 1.6rem;
    }
    & a {
      text-decoration: underline;
    }

    & pre code {
      white-space: pre-wrap;
      max-width: 40vw;
      display: inline-block;
      background: #46465b;
      color: white;
      border-radius: ${({ theme }) => theme.radius.sm};
      padding: ${({ theme }) => theme.spacing.md};
      font-size: ${({ theme }) => theme.type.size.body.md};
      margin-bottom: ${({ theme }) => theme.spacing.md};

      @media screen and (max-width: 500px) {
        max-width: calc(100vw - 4.8rem);
      }
    }

    & blockquote {
      font-style: italic;
      padding-left: ${({ theme }) => theme.spacing.md};
      border-left: 2px ${({ theme }) => theme.color.black} solid;
    }
  }

  &.now {
    background: ${({ theme }) => theme.color.now.background};
  }
  &.unoffice-hours {
    background: ${({ theme }) => theme.color.unofficeHours.background};
  }
`
export const ExternalLink = styled.a`
  text-decoration: underline;
  letter-spacing: 0.5px;

  &.no-underline {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`
export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.md};
  color: ${({ theme }) => theme.color.text};
  line-height: ${({ theme }) => theme.type.height.lg};
`
export const TechStack = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.lg};
  color: ${({ theme }) => theme.color.text};
`
export const ImageContainer = styled.div`
  width: 100%;
`
export const IndexFlexRowContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: column;
  }
`
export const GenericLabel = styled.div`
  font-size: ${({ theme }) => theme.type.size.a};
`
