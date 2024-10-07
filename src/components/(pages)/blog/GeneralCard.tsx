import React from "react";
import Link from "next/link";
import moment from "moment";

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
      <div className="flex w-full flex-col rounded-3xl border-[2px] border-black p-20">
        <h2 className="text-4xl">{title}</h2>
        <div>{subtitle}.</div>
        <div>Posted on: {moment(posted).format("MMM Do, yyy")}</div>
        <div className="w-min rounded-md border bg-slate-400 px-3 py-1 text-sm">
          {category}
        </div>
      </div>
    </Link>
  );
}
