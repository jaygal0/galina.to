import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import FadeInComponent from "@/components/global/FadeIn";
import Link from "next/link";
import CreatedAt from "@/components/global/CreatedAt";
import Category from "@/components/(pages)/blog/Category";
import Birthday from "@/components/(pages)/blog/Birthday";

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
    <div className="prose mb-20 w-full px-6 py-72 font-sans md:px-0">
      <FadeInComponent>
        <Link
          href="/blog"
          className="text-md font-sans font-thin no-underline hover:underline"
        >
          &#60; Blog
        </Link>
        <div className="mb-10">
          <div className="mb-8 flex flex-col gap-3">
            <h1 className="mb-0 mt-8 text-4xl font-bold lg:text-5xl ">
              {props.fontMatter.title}
            </h1>
            <h3 className="my-0 text-lg font-light md:text-2xl">
              {props.fontMatter.subtitle}.
            </h3>
            <Category label={props.fontMatter.category} />
          </div>
          <CreatedAt
            created={props.fontMatter.posted}
            updated={props.fontMatter.updated}
          />
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={props.content} />
          {props.fontMatter.category == "birthday" && <Birthday />}
        </div>
      </FadeInComponent>
    </div>
  );
}
