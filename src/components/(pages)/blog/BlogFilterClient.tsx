"use client";

import { useMemo, useState } from "react";
import GeneralCardBlog from "@/components/(pages)/blog/GeneralCard";

type BlogMeta = {
  title: string;
  subtitle?: string;
  posted: string;
  updated?: string;
  tags?: string[];
  category?: string;
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
          .map((blog) => blog.meta.category)
          .filter((category): category is string => Boolean(category)),
      ),
    );
  }, [blogs]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredBlogs = useMemo(() => {
    const publishedBlogs = blogs.filter((blog) => blog.meta.draft !== true);

    const result = activeCategory
      ? publishedBlogs.filter((blog) => blog.meta.category === activeCategory)
      : publishedBlogs;

    return [...result].sort((a, b) => (a.meta.posted < b.meta.posted ? 1 : -1));
  }, [blogs, activeCategory]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-3 py-1 text-sm ${
            activeCategory === null
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-3 py-1 text-sm ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
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
            category={blog.meta.category ?? ""}
          />
        ))}
      </div>
    </>
  );
}
