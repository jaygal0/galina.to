import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Placeholder from "@/app/public/cpb-sketches.jpg";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import FadeInComponent from "@/components/global/FadeIn";
import Role from "@/components/(pages)/projects/Role";

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
    <article className="prose py-72">
      <FadeInComponent>
        <a
          href="/projects"
          className="text-md font-sans font-thin no-underline hover:underline"
        >
          &#60; Projects
        </a>
        <div className="mb-16">
          <h1 className="mb-2 mt-20 font-sans text-5xl font-bold">
            {props.fontMatter.heading}
          </h1>
          <Role label={props.fontMatter.role} />
        </div>
        <div>
          <h2 className="mb-0 font-sans">Apps used</h2>
          {props.fontMatter.apps.map((e: any) => {
            return e == "figma" ? <div>figma</div> : "";
          })}
        </div>
        <Image
          src={Placeholder}
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
