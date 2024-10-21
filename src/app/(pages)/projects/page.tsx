import HeroText from "../../../components/global/HeroText";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import FadeInComponent from "@/components/global/FadeIn";
import Project from "@/components/(pages)/projects/Project";

export default function Page() {
  // Update the directory path to "data/projects"
  const projectsDir = path.join("data", "projects");

  // Read all files from the "data/projects" directory
  const files = fs.readdirSync(projectsDir);

  // Map over the files and extract front matter and slug
  const projects = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(projectsDir, filename),
      "utf-8",
    );

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter, // Extracted front matter metadata
      slug: filename.replace(".mdx", ""), // Create slug from filename
    };
  });

  return (
    <FadeInComponent>
      <HeroText
        heading="Projects"
        desc="I consider everything I work on, from full-time roles to personal endeavors, as individual projects. Feel free to explore some of the work I’ve created in the past."
      />
      <div className="grid gap-x-4 gap-y-8 px-6 pb-72 md:grid-cols-2 lg:grid-cols-3">
        {projects
          .map((project, index) => {
            return (
              <Project
                key={index}
                slug={project.slug}
                startDate={project.meta.startDate}
                heading={project.meta.heading}
                role={project.meta.role}
              />
            );
          })
          .sort((a: any, b: any) => {
            return a.props.startDate < b.props.startDate ? 1 : -1;
          })}
      </div>
    </FadeInComponent>
  );
}
