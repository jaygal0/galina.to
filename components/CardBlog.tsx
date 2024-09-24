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
      <div>
        <div>{title}</div>
        <div>{subtitle}.</div>
        <div>Posted on: {moment(posted).format("MMM Do, yyy")}</div>
        <div>{category}</div>
      </div>
    </Link>
  );
}
