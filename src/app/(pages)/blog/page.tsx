import HeroText from "../../../components/global/HeroText";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import FadeInComponent from "@/components/global/FadeIn";
import ContentDiv from "@/components/global/ContentDiv";
import GeneralCardBlog from "@/components/(pages)/blog/GeneralCard";
import { Metadata } from "next";
import Face from "@/components/(pages)/index/Face";
import BlogFilterClient from "@/components/(pages)/blog/BlogFilterClient";

export const metadata: Metadata = {
  title: "Joshua Galinato | Blog",
  description:
    "A collection of musings, insights, and spontaneous reflections—welcome to the blog where anything goes.",
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
  searchParams?: { category?: string };
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
    .sort((a, b) => (a.meta.posted < b.meta.posted ? 1 : -1));

  const initialCategory = searchParams?.category ?? null;

  return (
    <BlogFilterClient
      blogs={publishedBlogs}
      initialCategory={initialCategory}
    />
  );
}
