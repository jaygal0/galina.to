import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8",
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose-slate mb-20 lg:prose-xl prose-pre:bg-slate-700">
      <a href="/blog" className="text-md font-thin underline">
        &#60; Back to Blog
      </a>
      <h1 className="font-bold">{props.fontMatter.title}</h1>
      {/* TODO: PRIO 2: Go through DesignerStories and see how the issue is solved */}
      <MDXRemote source={props.content}></MDXRemote>
    </article>
  );
}
