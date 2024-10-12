import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import FadeInComponent from "@/components/global/FadeIn";
import Role from "@/components/(pages)/projects/Role";
import AppUsed from "@/components/(pages)/projects/AppUsed";

// Update the path to point to `/data/projects`
export async function generateStaticParams() {
  // Read the files from the `data/projects` directory
  const files = fs.readdirSync(path.join("data", "projects"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  // Read the markdown file from the `data/projects` directory
  const markdownFile = fs.readFileSync(
    path.join("data", "projects", slug + ".mdx"),
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
    <article className="prose py-72 font-sans">
      <FadeInComponent>
        <a
          href="/projects"
          className="text-md font-sans font-thin no-underline hover:underline"
        >
          &#60; Projects
        </a>
        <div className="mb-16">
          <h1 className="mb-0 pt-8 text-5xl font-bold">
            {props.fontMatter.heading}
          </h1>
          <p>{props.fontMatter.desc}</p>
          <Role label={props.fontMatter.role} />
        </div>
        <div>
          <h2 className="mb-0 text-xl">Apps used</h2>
          <AppUsed fontMatter={props.fontMatter.apps} />
        </div>
        <Image
          src=""
          alt=""
          objectFit="cover"
          className="mb-20 aspect-video w-full rounded-3xl border"
        />
        <div className="font-sans">
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={props.content} />
        </div>
      </FadeInComponent>
    </article>
  );
}
