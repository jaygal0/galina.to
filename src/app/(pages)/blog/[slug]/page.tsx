import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import FadeInComponent from "@/components/global/FadeIn";

export async function generateStaticParams() {
  // Update the path to read from "data/blogs"
  const files = fs.readdirSync(path.join("data", "blogs"));

  // Generate slugs based on the file names
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  // Read the markdown file from "data/blogs" directory
  const markdownFile = fs.readFileSync(
    path.join("data", "blogs", slug + ".mdx"),
    "utf-8",
  );

  // Use gray-matter to parse the markdown file and extract the front matter and content
  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default async function Page({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose-slate mb-20 lg:prose-xl prose-pre:bg-slate-700">
      <FadeInComponent>
        <a href="/blog" className="text-md font-thin underline">
          &#60; Back to Blog
        </a>
        <h1 className="font-bold">{props.fontMatter.title}</h1>
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={props.content} />
      </FadeInComponent>
    </article>
  );
}
