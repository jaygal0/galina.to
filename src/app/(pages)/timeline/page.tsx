import HeroText from "@/components/global/HeroText";
import TimelineCard from "@/components/(pages)/timeline/TimelineCard";
import FadeInComponent from "@/components/global/FadeIn";

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

export default async function Page() {
  const data = await getData();
  return (
    <FadeInComponent>
      <HeroText
        heading="timeline"
        desc="Instead of boring you with an 'About' page, here's a timeline of some of the interesting events that have happened in my life."
      />
      <div className="relative border-s border-gray-200 dark:border-gray-700">
        {data
          .map((item: any) => {
            return (
              <TimelineCard
                key={item._id}
                start={item.start}
                heading={item.title}
                desc={item.desc}
                date={item.date}
                image={item.image}
                buttonText={item.buttonText}
                buttonLink={item.buttonLink}
              />
            );
          })
          .sort((a: any, b: any) => {
            if (a.date > b.date) {
              return -1;
            } else {
              return 1;
            }
          })}
      </div>
    </FadeInComponent>
  );
}
