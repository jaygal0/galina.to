import dayjs from "dayjs";
import { ExternalLink } from "lucide-react";

export default function Experience({ data }: any) {
  return (
    <div>
      <p>
        Since none of my projects are generating revenue, I still need to figure
        out how to pay the bills:
      </p>
      {data.map((data: any, idx: any) => {
        const { position, company, url, startDate, endDate, location, desc } =
          data;
        return (
          <div key={idx} className="mb-7 space-y-1">
            <div className="flex gap-2">
              <h3 className="font-semibold">{position}</h3>
              <div className="text-muted-foreground">-</div>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground underline transition-all hover:text-white"
                >
                  {company}
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </a>
              ) : (
                <span className="text-muted-foreground">{company}</span>
              )}
            </div>
            <div className="mb-0 text-base">
              {dayjs(startDate).format("MMM YYYY")} -{" "}
              {endDate ? dayjs(endDate).format("MMM YYYY") : "Present"} •{" "}
              {location}
            </div>
            <p className="mb-0 text-base text-muted-foreground">{desc}</p>
          </div>
        );
      })}
    </div>
  );
}
