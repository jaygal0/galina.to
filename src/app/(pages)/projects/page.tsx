import HeroText from "../../../components/global/HeroText";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import FadeInComponent from "@/components/global/FadeIn";
import Project from "@/components/(pages)/projects/Project";

export default function Page() {
  const projectsDir = "projects";

  const files = fs.readdirSync(path.join(projectsDir));

  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(projectsDir, filename),
      "utf-8",
    );

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    // TODO 1: Sort out projects - Content, styling and logic across all detail pages
    <FadeInComponent>
      <HeroText
        heading="Projects"
        desc="This is a description to let you know that I'm adding a projects page."
      />
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 pb-72">
        {projects
          .map((project, index) => {
            return (
              <Project
                key={index}
                slug={project.slug}
                posted={project.meta.posted}
                heading={project.meta.heading}
                role={project.meta.role}
              />
            );
          })
          .sort((a: any, b: any) => {
            return a.props.posted < b.props.posted ? 1 : -1;
          })}
      </div>
    </FadeInComponent>
  );
}
