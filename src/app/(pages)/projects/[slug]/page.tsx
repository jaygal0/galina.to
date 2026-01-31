import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";
import { compileMDX } from "@/lib/mdx";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import type { Metadata } from "next";

type Frontmatter = {
  title: string;
  subtitle?: string;
  posted: string;
  categories?: string[];
  draft?: boolean;
  ogImage?: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "data", "projects", `${slug}.mdx`);

  let raw: string;

  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch {
    return {};
  }

  const { data } = matter(raw);
  const frontmatter = data as Frontmatter;

  if (frontmatter.draft && process.env.NODE_ENV === "production") {
    return {};
  }

  const title = `Joshua Galinato | ${frontmatter.title}`;
  const description = frontmatter.subtitle ?? "";
  const url = `https://galina.to/blog/${slug}`;
  const image = frontmatter.ogImage ?? "/og-image.jpg";

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
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

      {frontmatter.subtitle && (
        <p className="-mt-8 text-2xl text-muted-foreground">
          {frontmatter.subtitle}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="outline">
          {dayjs(frontmatter.posted).format("MMM YYYY")}
        </Badge>

        {(frontmatter.categories ?? []).map((category) => (
          <Badge key={category} variant="outline" className="capitalize">
            {category}
          </Badge>
        ))}
      </div>

      {Content.default({ components: {} })}
    </article>
  );
}
