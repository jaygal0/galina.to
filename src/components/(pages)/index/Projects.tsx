import { ExternalLink } from "lucide-react";
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
            <div className="flex items-center gap-2">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <h3 className="font-semibold underline">{project}</h3>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
              ) : (
                <h3 className="font-semibold">{project}</h3>
              )}
              <Badge variant="outline">{status}</Badge>
            </div>
            <p className="mb-0 text-base">{desc}</p>
            <p className="mb-0 text-base text-muted-foreground">{summary}</p>
          </div>
        );
      })}
    </div>
  );
}
