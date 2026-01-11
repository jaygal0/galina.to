import dayjs from "dayjs";

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
              <a href={url} target="_blank">
                <div className="text-muted-foreground underline">{company}</div>
              </a>
            </div>
            <div className="mb-0 text-base text-muted-foreground">
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
