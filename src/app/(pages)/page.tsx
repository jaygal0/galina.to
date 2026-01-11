import Face from "@/components/(pages)/index/Face";
import { Badge } from "@/components/ui/badge";

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
      <Face />
      <div className="space-y-20">
        <div>
          <h1 className="mt-32 font-bold">Joshua Galinato</h1>
          <h2 className="font-light text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
        <div>
          <p>
            For the past decade, I have worked in the music, vegan, wedding and
            now tech industry. I have picked up a unique set of skills from the
            many roles I have worked on.{" "}
          </p>
          <p>
            I co-founded Reload Sessions, where we provided a digital stage to
            over 300+ independent musicians. Even Taylor Swift tweeted one of
            our videos!
          </p>
          <p>
            I helped grow a vegan Instagram page to be one of the leading vegan
            brands in London.
          </p>
          <p>I filmed and edited over 50+ wedding videos.</p>
          <p>
            I&apos;ve helped design and build apps for Volvo, DeLaval and Elite
            Hotels.
          </p>
          <p>
            For the past 4 years, I&apos;ve been working at Orbi. Designing
            every interface and helping build the product to over 250,000 users.
          </p>
          <p>
            Occasionally, I like to write about what I get up to on my blog.
          </p>
        </div>
        <div>
          <p>
            If I&apos;m not hanging out with the wife, I&apos;m trying to figure
            out how to bring in more money so she can spend it all:
          </p>
          {projects.map((data: any, idx: any) => {
            const { project, url, status, desc, summary } = data;
            return (
              <div key={idx} className="mb-7 space-y-1">
                <div className="flex gap-2">
                  <a href={url} target="_blank">
                    <h3 className="font-semibold underline">{project}</h3>
                  </a>
                  <Badge variant="outline">{status}</Badge>
                </div>
                <p className="mb-0 text-base text-muted-foreground">{desc}</p>
                <p className="mb-0 text-base text-muted-foreground">
                  {summary}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <p>
            Since none of my projects are generating any revenue, I still need
            to figure out how to pay the bills.
          </p>
          {experience.map((data: any, idx: any) => {
            const {
              position,
              company,
              url,
              startDate,
              endDate,
              location,
              desc,
            } = data;
            return (
              <div key={idx} className="mb-7 space-y-1">
                <div className="flex gap-2">
                  <h3 className="font-semibold">{position}</h3>
                  <div className="text-muted-foreground">-</div>
                  <a href={url} target="_blank">
                    <div className="text-muted-foreground underline">
                      {company}
                    </div>
                  </a>
                </div>
                <div className="mb-0 text-base text-muted-foreground">
                  {startDate} - {endDate} • {location}
                </div>
                <p className="mb-0 text-base text-muted-foreground">{desc}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p>
            Want to know what I&apos;m currently up to? Check out my /now page.
          </p>
          <p>
            I left social media back in 2012. If you have something to say, send
            me an email.
          </p>
        </div>
      </div>
    </>
  );
}
