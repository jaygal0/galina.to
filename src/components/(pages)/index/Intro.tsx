import Link from "next/link";

export default function Intro() {
  return (
    <div>
      <p>
        For the past decade, I have worked in the music, vegan and now tech
        industry. I have picked up a unique set of skills from the many roles I
        have worked on.{" "}
      </p>
      <p>
        I co-founded{" "}
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Reload Sessions
        </a>
        , where we provided a digital stage to over 300+ independent musicians.
        Even Taylor Swift tweeted one of our videos!
      </p>
      <p>
        I helped grow a{" "}
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          vegan Instagram page
        </a>{" "}
        to be one of the leading vegan brands across London.
      </p>
      <p>
        I&apos;ve designed and helped build apps for Volvo, DeLaval, Elite
        Hotels.
      </p>
      <p>
        Currently, for the past 4 years I&apos;ve been working at{" "}
        <a
          href="http://orbi.io"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Orbi
        </a>
        . Designing every interface and helping build the product to over
        250,000 users.
      </p>
      <p>
        Occasionally, I like to write about what I get up to on my{" "}
        <Link href="/blog" className="underline">
          blog
        </Link>
        .
      </p>
    </div>
  );
}
