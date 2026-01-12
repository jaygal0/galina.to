"use client";

import { useMemo, useState } from "react";
import GeneralCardBlog from "@/components/(pages)/blog/GeneralCard";

type BlogMeta = {
  title: string;
  subtitle?: string;
  posted: string;
  updated?: string;
  tags?: string[];
  categories?: string[];
  draft?: boolean;
};

type Blog = {
  slug: string;
  meta: BlogMeta;
};

type Props = {
  blogs: Blog[];
};

export default function BlogFilterClient({ blogs }: Props) {
  const categories = useMemo(() => {
    return Array.from(
      new Set(
        blogs
          .flatMap((blog) => blog.meta.categories ?? [])
          .filter((category): category is string => Boolean(category)),
      ),
    );
  }, [blogs]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredBlogs = useMemo(() => {
    const publishedBlogs = blogs.filter((blog) => blog.meta.draft !== true);

    const result = activeCategory
      ? publishedBlogs.filter((blog) =>
          blog.meta.categories?.includes(activeCategory),
        )
      : publishedBlogs;

    return [...result].sort((a, b) => (a.meta.posted < b.meta.posted ? 1 : -1));
  }, [blogs, activeCategory]);

  return (
    <>
      <div className="mb-20 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-3 py-1 text-sm ${
            activeCategory === null
              ? "bg-white text-black"
              : "border border-white text-white"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-3 py-1 text-sm capitalize ${
              activeCategory === category
                ? "bg-white text-black"
                : "border border-white text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-12">
        {filteredBlogs.map((blog) => (
          <GeneralCardBlog
            key={blog.slug}
            link={blog.slug}
            title={blog.meta.title}
            subtitle={blog.meta.subtitle ?? ""}
            posted={blog.meta.posted}
            updated={blog.meta.updated}
            categories={blog.meta.categories ?? []}
          />
        ))}
      </div>
    </>
  );
}
