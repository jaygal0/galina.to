import React from 'react'
import Heading from '../../../components/HeroText'
import Meta from '../../../components/Meta'
import { Navigation } from '../../../components/Navigation'
import { IndexMain } from '../../../styles'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import CardBlog from '../../../components/CardBlog'

const blog = ({ posts }: { posts: any }) => {
  return (
    <>
      <Meta title="Blog" />
      <Navigation />
      <IndexMain className="projects">
        <Heading
          title="Blog"
          text="A space for me to write about whatever I want."
        />
        {posts
          .map((post: any, index: any) => {
            return (
              <CardBlog
                key={index}
                link={post.slug}
                title={post.frontMatter.title}
                subtitle={post.frontMatter.subtitle}
                posted={post.frontMatter.posted}
                updated={post.frontMatter.updated}
                tags={post.frontMatter.tags}
                category={post.frontMatter.category}
              />
            )
          })
          .sort((a: any, b: any) => {
            return a.props.posted < b.props.posted ? 1 : -1
          })}
      </IndexMain>
    </>
  )
}

export default blog

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })
  return {
    props: {
      posts,
    },
  }
}
