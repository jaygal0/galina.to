import React from 'react'
import Heading from '../../components/Heading'
import Meta from '../../components/Meta'
import { Navigation } from '../../components/Navigation'
import { IndexMain } from '../../styles'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import CardBlog from '../../components/CardBlog'
import moment from 'moment'

const blog = ({ posts }: { posts: any }) => {
  console.log(posts)

  return (
    <>
      <Meta title="Blog" />
      <Navigation />
      <IndexMain className="projects">
        <Heading
          title="Blog"
          text="Here's a space where I get my random thoughts out and capture it here. "
        />
        {posts.map((post: any, index: any) => {
          console.log(`what's going on here: ${post.frontMatter.updated}`)

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
