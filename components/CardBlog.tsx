import React from "react";
import Link from "next/link";
import moment from "moment";

export default function CardBlog({
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
      <div className="w-100 border rounded-lg px-16 py-8">
        <h2 className="text-4xl">{title}</h2>
        <div>{subtitle}.</div>
        <div>Posted on: {moment(posted).format("MMM Do, yyy")}</div>
        <div className="w-min px-3 py-1 border bg-slate-400 text-sm rounded-md">
          {category}
        </div>
      </div>
    </Link>
  );
}
