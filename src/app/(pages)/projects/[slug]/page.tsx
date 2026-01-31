import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";
import { compileMDX } from "@/lib/mdx";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Frontmatter = {
  title: string;
  subtitle?: string;
  category?: string;
  draft?: boolean;
  ogImage?: string;
  status?: string;
  url?: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

async function getRelatedBlogs(category: string) {
  const blogsDir = path.join(process.cwd(), "data", "blogs");
  const files = await fs.readdir(blogsDir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const raw = await fs.readFile(path.join(blogsDir, file), "utf8");
      const { data } = matter(raw);
      const frontmatter = data as {
        title: string;
        posted?: string;
        categories?: string[];
        draft?: boolean;
      };

      if (frontmatter.draft) return null;

      const normalise = (value: string) =>
        value.toLowerCase().replace(/\s+/g, "-");

      if (
        !frontmatter.categories?.some(
          (c) => normalise(c) === normalise(category),
        )
      )
        return null;

      return {
        slug,
        title: frontmatter.title,
        posted: frontmatter.posted,
      };
    }),
  );

  return (
    posts.filter(Boolean) as {
      slug: string;
      title: string;
      posted?: string;
    }[]
  ).sort(
    (a, b) =>
      new Date(b.posted ?? 0).getTime() - new Date(a.posted ?? 0).getTime(),
  );
}

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
  const url = `https://galina.to/projects/${slug}`;
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

  const filePath = path.join(process.cwd(), "data", "projects", `${slug}.mdx`);

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

  const relatedBlogs = frontmatter.category
    ? await getRelatedBlogs(frontmatter.category)
    : [];

  const Content = await compileMDX(content);

  return (
    <article className="prose prose-invert text-xl">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <h1 className="mb-0">{frontmatter.title}</h1>

        {frontmatter.url && (
          <Button
            asChild
            variant="outline"
            className="text-muted-foreground hover:text-foreground"
          >
            <a
              href={frontmatter.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit external site"
            >
              View site
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>

      {frontmatter.subtitle && (
        <p className="mt-2 text-2xl text-muted-foreground">
          {frontmatter.subtitle}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {frontmatter.category && (
          <Badge variant="outline" className="capitalize">
            {frontmatter.status}
          </Badge>
        )}
      </div>

      {Content.default({ components: {} })}

      {relatedBlogs.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Related writing</h2>

          <ul className="space-y-2">
            {relatedBlogs.map((post) => (
              <li key={post.slug}>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-neutral-200 underline underline-offset-4"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
