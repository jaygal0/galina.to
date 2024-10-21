import React from "react";
import Link from "next/link";
import moment from "moment";
import CreatedAt from "@/components/global/CreatedAt";
import Category from "./Category";

export default function GeneralCardBlog({
  link,
  title,
  subtitle,
  posted,
  updated,
  tags,
  category,
}: {
  link: string;
  title: string;
  subtitle: string;
  posted: string;
  updated?: string;
  tags?: string;
  category: string;
}) {
  return (
    <Link href={`/blog/${link}`}>
      <div className="group relative flex flex-col rounded-3xl border-black p-4 transition-all md:px-20 md:py-10">
        <div className="absolute inset-0 rounded-3xl border-2 border-black transition-all duration-300 group-hover:inset-[-2px] group-hover:border-4"></div>
        <h2 className="relative z-10 text-lg font-bold md:text-4xl">{title}</h2>
        <div className="relative z-10 mb-2 text-base md:text-lg">
          {subtitle}.
        </div>
        <CreatedAt created={posted} updated={updated} />
        <Category label={category} />
      </div>
    </Link>
  );
}
