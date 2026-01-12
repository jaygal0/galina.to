import type { MetadataRoute } from "next";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

type SitemapItem = MetadataRoute.Sitemap[number];

type BlogPostMeta = {
  slug: string;
  updatedAt?: string;
};

async function getBlogPosts() {
  const dir = path.join(process.cwd(), "data", "blogs");
  let files: string[] = [];

  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const posts: Array<BlogPostMeta | null> = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const { data } = matter(raw);

        if (data.draft) return null;

        return {
          slug: file.replace(".mdx", ""),
          updatedAt: data.date,
        };
      }),
  );

  return posts.filter((post): post is BlogPostMeta => post !== null);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://galina.to";

  const blogPosts = await getBlogPosts();

  const blogPostPages: SitemapItem[] = blogPosts.map((post: BlogPostMeta) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticPages: SitemapItem[] = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/now`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [...staticPages, ...blogPostPages];
}
