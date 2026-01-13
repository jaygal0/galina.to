"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="max-w-screen-3xl mx-auto mb-8 p-5 text-xl text-muted-foreground md:p-12">
      {pathname !== "/now" && (
        <p>
          Check out what I'm up to{" "}
          <Link
            href="/now"
            className="underline transition-all hover:text-foreground"
          >
            /now
          </Link>
          .
        </p>
      )}
      {pathname !== "/blog" && (
        <p>
          Read my latest thoughts on my{" "}
          <Link
            href="/blog"
            className="underline transition-all hover:text-foreground"
          >
            blog
          </Link>
          .
        </p>
      )}
      <p>
        Send me an{" "}
        <a
          href="mailto:joshua@galina.to"
          className="underline transition-all hover:text-foreground"
        >
          email
        </a>
        .
      </p>
    </footer>
  );
}
