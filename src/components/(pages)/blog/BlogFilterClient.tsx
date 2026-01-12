"use client";

import { useMemo, useState } from "react";
import GeneralCardBlog from "@/components/(pages)/blog/GeneralCard";
import { useRouter } from "next/navigation";

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
  initialCategory: string | null;
};

export default function BlogFilterClient({ blogs, initialCategory }: Props) {
  const categories = useMemo(() => {
    return Array.from(
      new Set(
        blogs
          .flatMap((blog) => blog.meta.categories ?? [])
          .filter((category): category is string => Boolean(category)),
      ),
    ).sort((a, b) => a.localeCompare(b));
  }, [blogs]);

  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialCategory,
  );

  const setCategory = (category: string | null) => {
    setActiveCategory(category);
    const params = new URLSearchParams(window.location.search);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const filteredBlogs = useMemo(() => {
    const publishedBlogs = blogs.filter((blog) => blog.meta.draft !== true);

    return activeCategory
      ? publishedBlogs.filter((blog) =>
          blog.meta.categories?.includes(activeCategory),
        )
      : publishedBlogs;
  }, [blogs, activeCategory]);

  return (
    <>
      <div className="mb-20 flex flex-wrap gap-3">
        <button
          onClick={() => setCategory(null)}
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
            onClick={() => setCategory(category)}
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
