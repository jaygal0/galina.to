import Link from "next/link";
import Role from "./Role";
import Image from "next/image";

interface T {
  slug: string;
  posted: string;
  heading: string;
  role: string;
}

export default function Project({ slug, posted, heading, role }: T) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex flex-col gap-2"
      datatype={posted}
    >
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 font-sans transition-all hover:scale-105">
        <Image
          src={`/${heading.toLowerCase().replace(/\s+/g, "")}-cover.jpg`}
          alt={heading}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex w-full items-center justify-between px-4">
        <div className="font-sans text-lg font-bold">{heading}</div>
        <Role label={role} />
      </div>
    </Link>
  );
}
