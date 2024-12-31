import HeroText from "@/components/global/HeroText";
import TimelineCard from "@/components/(pages)/timeline/TimelineCard";
import FadeInComponent from "@/components/global/FadeIn";
import { Metadata } from "next";

async function getData() {
  const res = await fetch(`${process.env.WEB_SITE}/api/timeline`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}

export const metadata: Metadata = {
  title: "Joshua Galinato | Timeline",
  description:
    "Instead of boring you with an 'About' page, here's a timeline of some of the interesting events that have happened in my life.",
};

export default async function Page() {
  const data = await getData();

  // Sort data first by date (if date is a string, you may need to convert it to Date object)
  const sortedData = data.sort((a: any, b: any) => (a.date > b.date ? 1 : -1));

  return (
    <FadeInComponent>
      <HeroText
        heading="timeline"
        desc="Instead of boring you with an 'About' page, here's a timeline of some of the interesting events that have happened in my life."
      />
      <div className="pb-12">
        <div className="relative w-screen border-s border-gray-300 sm:w-full dark:border-gray-700">
          {sortedData.map((item: any) => (
            <TimelineCard
              key={item._id} // Ensure a unique key
              heading={item.title}
              desc={item.desc}
              date={item.date}
              image={item.image}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
            />
          ))}
        </div>
      </div>
    </FadeInComponent>
  );
}
