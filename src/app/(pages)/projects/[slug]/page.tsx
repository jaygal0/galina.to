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
            {/* Heading */}
            <h1 className="mb-0 mt-8 text-5xl font-bold">
              {props.fontMatter?.heading || "Project Title"}
            </h1>

            {/* Conditionally render the "View website" link if `website` is available */}
            {props.fontMatter?.website && (
              <a
                href={props.fontMatter.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex items-center gap-2 rounded-md border border-blue-500 px-4 py-2 text-lg text-blue-500 transition-all duration-200 hover:bg-blue-500 hover:text-white"
              >
                View website
                <span className="inline-block h-5 w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-full w-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 3h8m0 0v8m0-8L10 14m-7 7h18"
                    />
                  </svg>
                </span>
              </a>
            )}
          </div>
          <p className="mb-4 text-2xl leading-normal">
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
        {props.fontMatter.apps && (
          <AppUsed fontMatter={props.fontMatter.apps} />
        )}
        <CreatedAt
          created={props.fontMatter.created}
          updated={props.fontMatter.updated}
        />
        <div className="relative mb-20 aspect-video w-full">
          <Image
            src={`/${props.fontMatter.heading.toLowerCase().replace(/\s+/g, "")}-hero.jpg`}
            alt={`${props.fontMatter.heading}`}
            fill
            style={{ objectFit: "cover" }}
            className="mb-20 aspect-video rounded-3xl border"
          />
        </div>
        <div className="font-sans">
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={props.content} />
        </div>
      </FadeInComponent>
    </div>
  );
}
