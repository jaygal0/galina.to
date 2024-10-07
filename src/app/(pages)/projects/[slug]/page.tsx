import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Placeholder from "@/app/public/cpb-sketches.jpg";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import FadeInComponent from "@/components/global/FadeIn";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("projects", slug + ".mdx"),
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
      <FadeInComponent>
        {/* TODO 2: Figure out why mb-10 doesn't work */}
        <a href="/projects" className="text-md mb-10 font-thin underline">
          &#60; Back to Projects
        </a>
        <h1 className="font-bold">{props.fontMatter.heading}</h1>
        <div className="mb-18 relative aspect-video w-full rounded-3xl border">
          <Image src={Placeholder} alt="" objectFit="cover" />
        </div>
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={props.content}></MDXRemote>
      </FadeInComponent>
    </article>
  );
}
