import { Badge } from "@/components/ui/badge";

export default function Projects({ data }: any) {
  return (
    <div>
      <p>
        If I&apos;m not hanging out with the wife, I&apos;m working on my own
        projects and figuring out how to bring in more money so she can spend it
        all:
      </p>
      {data.map((data: any, idx: any) => {
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
            <p className="mb-0 text-base text-muted-foreground">{summary}</p>
          </div>
        );
      })}
    </div>
  );
}
