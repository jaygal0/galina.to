import Link from "next/link";
import HeroText from "../../../../components/global/HeroText";
import Role from "../../../../components/projects/Role";

export default function Page() {
  const projects = [
    {
      heading: "Reload Sessions",
      desc: "",
      role: "Founder",
      slug: "reload-sessions",
    },
    {
      heading: "Vegans of LDN",
      desc: "",
      role: "Creative Director",
      slug: "vegans-of-ldn",
    },
    {
      heading: "Delaval",
      desc: "",
      role: "UX Designer",
      slug: "delaval",
    },
    {
      heading: "Volvo",
      desc: "",
      role: "Lead UX Designer",
      slug: "volvo",
    },
    {
      heading: "SQLI",
      desc: "",
      role: "Lead UX Designer",
      slug: "sqli",
    },
    {
      heading: "Orbi",
      desc: "",
      role: "Lead UX Designer",
      slug: "orbi",
    },
    {
      heading: "Manchester Utd",
      desc: "",
      role: "Intern",
      slug: "manchester-united",
    },
  ];
  return (
    <div>
      <HeroText
        heading="Projects"
        desc="This is a description to let you know that I'm adding a projects page."
      />
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {projects.map((project, index) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              className="flex flex-col gap-2"
            >
              <div className="aspect-video w-full bg-slate-400 rounded-3xl hover:scale-105 transition-all flex justify-center items-center">
                {project.heading}
              </div>
              <div className="flex w-full justify-between px-4 items-center">
                <div className="text-lg">{project.heading}</div>
                <Role label={project.role} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
