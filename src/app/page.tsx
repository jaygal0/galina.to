import Face from "@/components/(pages)/index/Face";
import { Badge } from "@/components/ui/badge";
import Heading from "@/components/(pages)/index/Heading";
import Intro from "@/components/(pages)/index/Intro";
import Projects from "@/components/(pages)/index/Projects";
import Experience from "@/components/(pages)/index/Experience";
import Footer from "@/components/global/Footer";
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
      <div className="space-y-20">
        <Heading heading="Joshua Galinato" oneLiner="This is a test" />
        <Intro />
        <Blogs />
        <Projects data={projects} />
        <Experience data={experience} />
      </div>
    </>
  );
}
