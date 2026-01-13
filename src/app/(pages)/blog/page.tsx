import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import BlogFilterClient from "@/components/(pages)/blog/BlogFilterClient";

export const metadata: Metadata = {
  title: "Joshua Galinato | Blog",
  description:
    "I like to write about my thoughts, ideas and experiments in design, development and indie making.",
};

type BlogMeta = {
  title: string;
  subtitle?: string;
  posted: string;
  updated?: string;
  tags?: string[];
  category?: string;
  draft?: boolean;
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const blogDir = path.join("data", "blogs");
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data } = matter(fileContent);

    const meta = data as BlogMeta;

    return {
      slug: filename.replace(".mdx", ""),
      meta,
    };
  });

  const publishedBlogs = blogs
    .filter((blog) => !blog.meta.draft)
    .sort(
      (a, b) =>
        new Date(b.meta.posted).getTime() - new Date(a.meta.posted).getTime(),
    );

  const resolvedSearchParams = await searchParams;
  const initialCategory = resolvedSearchParams?.category ?? null;

  return (
    <BlogFilterClient
      blogs={publishedBlogs}
      initialCategory={initialCategory}
    />
  );
}
