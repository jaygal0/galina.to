import React from "react";
import Link from "next/link";
import CreatedAt from "@/components/global/CreatedAt";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

export default function GeneralCardBlog({
  link,
  title,
  subtitle,
  posted,
  updated,
  categories,
}: {
  link: string;
  title: string;
  subtitle: string;
  posted: string;
  updated?: string;
  tags?: string;
  categories: string[];
}) {
  return (
    <Link href={`/blog/${link}`}>
      <div className="space-y-1">
        <h2 className="underline">{title}</h2>
        <div className="text-base text-muted-foreground">{subtitle}</div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{dayjs(posted).format("MMM YYYY")}</Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="w-auto capitalize"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
