"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="max-w-screen-3xl mx-auto p-12 text-xl">
      {pathname !== "/now" && (
        <p>
          Want to know what I&apos;m currently up to?{" "}
          <span className="block">
            Check out my{" "}
            <Link href="/now" className="underline">
              /now
            </Link>{" "}
            page.
          </span>
        </p>
      )}
      <p>
        I left social media back in 2012. If you have something to say, send me
        an{" "}
        <a href="mailto:joshua@galina.to" className="underline">
          email
        </a>
        .
      </p>
    </footer>
  );
}
