import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { IndexMain } from '../../styles'
import Meta from '../../components/Meta'
import { Navigation } from '../../components/Navigation'
import styled from 'styled-components'
import moment from 'moment'

const Title = styled.h1``
const Subtitle = styled.h2`
  font-weight: 400;
  font-family: 'DM Sans', sans-serif;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  margin-bottom: 1.2rem;
  text-transform: capitalize;
  line-height: 3.2rem;
`
const Posted = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const PostPage = ({
  frontMatter: { title, subtitle, posted, updated },
  mdxSource,
}: {
  frontMatter: any
  mdxSource: any
}) => {
  return (
    <>
      <Meta title={title} />
      <Navigation />
      <IndexMain className="blogPost">
        <Title>{title}</Title>
        <Subtitle>{subtitle}.</Subtitle>
        {updated ? (
          <Posted>Updated on {moment(updated).format('MMMM Do, YYYY')}</Posted>
        ) : (
          <Posted>Posted on {moment(posted).format('MMMM Do, YYYY')}</Posted>
        )}

        <MDXRemote {...mdxSource} />
      </IndexMain>
    </>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({
  params: { slug },
}: {
  params: any
  slug: any
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
