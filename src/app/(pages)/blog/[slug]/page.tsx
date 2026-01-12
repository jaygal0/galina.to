import { compileMDX } from "@/lib/mdx";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

type Frontmatter = {
  title: string;
  subtitle?: string;
  posted: string;
  updated?: boolean;
  tags?: boolean;
  category?: boolean;
  draft?: boolean;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "data", "blogs", `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { data } = matter(raw);

  if (data.draft && process.env.NODE_ENV === "production") {
    return {};
  }

  return {
    title: data.title,
    subtitle: data.subtitle,
    posted: data.posted,
    updated: data.updated,
    tags: data.tags,
    category: data.category,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "data", "blogs", `${slug}.mdx`);

  let raw: string;

  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch {
    notFound();
  }

  const { content, data } = matter(raw);
  const frontmatter = data as Frontmatter;

  if (frontmatter.draft && process.env.NODE_ENV === "production") {
    notFound();
  }

  const Content = await compileMDX(content);

  return (
    <article className="prose prose-invert text-xl">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.subtitle}</h2>
      {Content.default({
        components: {},
      })}
    </article>
  );
}
