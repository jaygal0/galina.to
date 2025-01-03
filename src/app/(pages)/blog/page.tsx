import HeroText from "../../../components/global/HeroText";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import FadeInComponent from "@/components/global/FadeIn";
import ContentDiv from "@/components/global/ContentDiv";
import GeneralCardBlog from "@/components/(pages)/blog/GeneralCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joshua Galinato | Blog",
  description:
    "A collection of musings, insights, and spontaneous reflections—welcome to the blog where anything goes.",
};

export default async function Page({ posts }: any) {
  const blogDir = path.join("data", "blogs");

  // Read the files from the `data/blogs` directory
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    // Read each markdown file content
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // Extract front matter and slug from the filename and content
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""), // Create slug from the filename
    };
  });

  return (
    <FadeInComponent>
      <HeroText
        heading="Blog"
        desc="A collection of musings, insights, and spontaneous reflections—welcome to the blog where anything goes."
      />
      <ContentDiv>
        {blogs
          .map((blog: any, index: any) => {
            return (
              <GeneralCardBlog
                key={index}
                link={blog.slug}
                title={blog.meta.title}
                subtitle={blog.meta.subtitle}
                posted={blog.meta.posted}
                updated={blog.meta.updated}
                tags={blog.meta.tags}
                category={blog.meta.category}
              />
            );
          })
          .sort((a: any, b: any) => {
            return a.props.posted < b.props.posted ? 1 : -1;
          })}
      </ContentDiv>
    </FadeInComponent>
  );
}
