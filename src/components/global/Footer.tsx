import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <p>
        Want to know what I&apos;m currently up to?{" "}
        <span className="block">
          Check out my{" "}
          <Link href="/now" className="underline">
            /now page
          </Link>
          .
        </span>
      </p>
      <p>
        I left social media back in 2012. If you have something to say, send me
        an{" "}
        <a href="mailto:joshua@galina.to" className="underline">
          email
        </a>
        .
      </p>
    </div>
  );
}
