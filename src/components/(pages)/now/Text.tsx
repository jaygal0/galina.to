"use client";
import dayjs from "dayjs";

interface Props {
  desc: string;
  date: string;
}

export default function Text({ desc, date }: Props) {
  return (
    <div>
      <div className="mb-3">{desc}</div>
      <div className="text-base text-muted-foreground">
        Last Updated: {dayjs(date).format("MMM D YYYY")}. Inspired by{" "}
        <a
          href="https://sive.rs/nowff"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Derek Sivers
        </a>
      </div>
    </div>
  );
}
