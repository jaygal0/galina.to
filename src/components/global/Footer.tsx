"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="max-w-screen-3xl mx-auto p-12 text-xl text-muted-foreground">
      {pathname !== "/now" && (
        <p>
          Want to know what I&apos;m currently up to?{" "}
          <span className="block">
            Check out my{" "}
            <Link
              href="/now"
              className="underline transition-all hover:text-foreground"
            >
              /now
            </Link>{" "}
            page.
          </span>
        </p>
      )}
      <p>
        I left social media back in 2012. If you'd like to reach out, send me an{" "}
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
