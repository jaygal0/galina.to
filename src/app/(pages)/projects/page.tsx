import Link from "next/link";
import HeroText from "../../../components/global/HeroText";
import Role from "../../../components/projects/Role";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Page() {
  const projectsDir = "projects";

  const files = fs.readdirSync(path.join(projectsDir));

  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(projectsDir, filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <div>
      <HeroText
        heading="Projects"
        desc="This is a description to let you know that I'm adding a projects page."
      />
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {projects
          .map((project, index) => {
            return (
              <Link
                href={`/projects/${project.slug}`}
                key={index}
                className="flex flex-col gap-2"
                datatype={project.meta.posted}
              >
                <div className="aspect-video w-full bg-slate-400 rounded-3xl hover:scale-105 transition-all flex justify-center items-center">
                  {project.meta.heading}
                </div>
                <div className="flex w-full justify-between px-4 items-center">
                  <div className="text-lg">{project.meta.heading}</div>
                  <Role label={project.meta.role} />
                </div>
              </Link>
            );
          })
          .sort((a: any, b: any) => {
            return a.props.datatype < b.props.datatype ? 1 : -1;
          })}
      </div>
    </div>
  );
}
