import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* TODO 1: Add fonts and style home page */}
      <h1 className="-mb-3">Hi, I'm Joshua Galinato</h1>
      <h2 className="flex flex-col text-8xl">
        <span>
          I{" "}
          <Link href="projects" className="hover:underline">
            Design
          </Link>
          ,
        </span>{" "}
        <Link href="/projects" className="hover:underline">
          Develop
        </Link>{" "}
        <span>&amp; Solve</span> <span>Problems</span>
      </h2>
    </div>
  );
}
