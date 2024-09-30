import timelineData from "../../../../data/timeline";

export async function GET(req: Request) {
  const data = await timelineData;
  return Response.json(data);
}
