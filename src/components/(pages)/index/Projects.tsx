import { Badge } from "@/components/ui/badge";

export default function Projects({ data }: any) {
  return (
    <div>
      <p className="text-muted-foreground">Personal Projects</p>
      {data.map((data: any, idx: any) => {
        const { title, slug, status, subtitle, summary } = data;
        return (
          <div key={idx} className="mb-7 space-y-1">
            <div className="flex items-center gap-2">
              <a href={`/projects/${slug}`} className="flex items-center gap-1">
                <h3 className="font-semibold underline">{title}</h3>
              </a>
              <Badge variant="outline">{status}</Badge>
            </div>
            <p className="mb-0 text-base text-muted-foreground">{subtitle}</p>
            <p className="mb-0 text-base text-muted-foreground">{summary}</p>
          </div>
        );
      })}
    </div>
  );
}
