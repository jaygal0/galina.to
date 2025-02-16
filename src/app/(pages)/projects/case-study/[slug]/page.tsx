import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import FadeInComponent from "@/components/global/FadeIn";
import Role from "@/components/(pages)/projects/Role";
import AppUsed from "@/components/(pages)/projects/AppUsed";
import CreatedAt from "@/components/global/CreatedAt";
import Duration from "@/components/(pages)/projects/Duration";
import BackButton from "@/components/global/BackButton";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("data", "projects", "case-study"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("data", "projects", "case-study", slug + ".mdx"),
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
    <div className="prose w-full px-6 py-72 font-sans md:px-4">
      <FadeInComponent>
        <BackButton />
        <div className="mb-10">
          <h1 className="mb-0 mt-8 text-2xl font-bold md:text-5xl">
            {props.fontMatter?.heading || "Project Title"}
          </h1>
          <CreatedAt
            created={props.fontMatter.created}
            updated={props.fontMatter.updated}
          />
          <p className="mb-4 text-lg leading-normal md:text-2xl">
            {props.fontMatter.desc}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Role label={props.fontMatter.role} />
            <Duration
              startDate={props.fontMatter.startDate}
              endDate={props.fontMatter.endDate}
            />
          </div>
        </div>
        <div className="font-sans">
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={props.content} />
        </div>
      </FadeInComponent>
    </div>
  );
}
