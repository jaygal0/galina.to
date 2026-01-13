import Heading from "@/components/(pages)/index/Heading";
import Intro from "@/components/(pages)/index/Intro";
import Projects from "@/components/(pages)/index/Projects";
import Experience from "@/components/(pages)/index/Experience";
import Blogs from "@/components/(pages)/index/Blogs";

async function getProjectsData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/projects`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

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

export default async function Page() {
  const projects = await getProjectsData();
  const experience = await getExperienceData();

  return (
    <>
      <div className="space-y-28">
        <Heading
          heading="Joshua Galinato"
          oneLiner="Designer, Developer & Indie Maker"
        />
        <Intro />
        <Projects data={projects} />
        <Experience data={experience} />
        <Blogs />
      </div>
    </>
  );
}
