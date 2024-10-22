import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import FadeInComponent from "@/components/global/FadeIn";
import Role from "@/components/(pages)/projects/Role";
import AppUsed from "@/components/(pages)/projects/AppUsed";
import CreatedAt from "@/components/global/CreatedAt";
import Link from "next/link";
import Duration from "@/components/(pages)/projects/Duration";
import ViewWebsite from "@/components/(pages)/projects/ViewWebsite";

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
    <div className="prose w-full py-72 font-sans">
      <FadeInComponent>
        <Link
          href="/projects"
          className="text-md font-sans font-thin no-underline hover:underline"
        >
          &#60; Projects
        </Link>
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="mb-0 mt-8 text-2xl font-bold md:text-5xl">
              {props.fontMatter?.heading || "Project Title"}
            </h1>
            {props.fontMatter?.website && (
              <ViewWebsite website={props.fontMatter.website} />
            )}
          </div>
          <CreatedAt
            created={props.fontMatter.created}
            updated={props.fontMatter.updated}
          />
          <p className="mb-4 text-lg leading-normal md:text-2xl">
            {props.fontMatter.desc}
          </p>
          <div className="flex items-center gap-2">
            <Role label={props.fontMatter.role} />
            <Duration
              startDate={props.fontMatter.startDate}
              endDate={props.fontMatter.endDate}
            />
          </div>
        </div>
        <div className="relative mb-20 aspect-video w-full">
          <Image
            src={`/${props.fontMatter.heading.toLowerCase().replace(/\s+/g, "")}-hero.jpg`}
            alt={`${props.fontMatter.heading}`}
            fill
            style={{ objectFit: "cover" }}
            className="mb-20 aspect-video rounded-3xl border"
          />
        </div>
        {props.fontMatter.apps && (
          <AppUsed fontMatter={props.fontMatter.apps} />
        )}
        <div className="font-sans">
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={props.content} />
        </div>
      </FadeInComponent>
    </div>
  );
}
