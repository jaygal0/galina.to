import timelineData from "../../../../data/timeline/timeline";

export async function GET(req: Request) {
  const data = await timelineData;
  return Response.json(data);
}
