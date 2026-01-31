import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Heading from "@/components/(pages)/index/Heading";
import Intro from "@/components/(pages)/index/Intro";
import Projects from "@/components/(pages)/index/Projects";
import Experience from "@/components/(pages)/index/Experience";
import Blogs from "@/components/(pages)/index/Blogs";

async function getExperienceData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/experience`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

async function getProjectsFromFrontmatter() {
  const projectsDir = path.join(process.cwd(), "data", "projects");
  const files = await fs.readdir(projectsDir);

  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(projectsDir, file), "utf8");

        const { data } = matter(raw);

        return {
          slug: file.replace(".mdx", ""),
          ...data,
        };
      }),
  );

  return projects.sort(
    (a: any, b: any) =>
      new Date(b.posted ?? b.created ?? 0).getTime() -
      new Date(a.posted ?? a.created ?? 0).getTime(),
  );
}

export default async function Page() {
  const projects = await getProjectsFromFrontmatter();
  const experience = await getExperienceData();

  return (
    <>
      <div className="space-y-28">
        <Heading
          heading="Joshua Galinato"
          oneLiner="Designer, Developer & Indie Maker."
        />
        <Intro />
        <Projects data={projects} />
        <Experience data={experience} />
        <Blogs />
      </div>
    </>
  );
}
