import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = path.join(process.cwd(), 'pages', 'blog')

export const getPostFrontmatter = (slug) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(root, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContent)

  const meta = {
    ...data,
    slug: realSlug,
  }

  return meta
}

export const getAllPostsMeta = () => {
  const slugs = fs.readdirSync(root)
  const posts = slugs.map((slug) => getAllPostsMeta(slug))
  return posts
}
