import careers from "../../../../data/now/career";

export async function GET(req: Request) {
  const data = await careers;
  return Response.json(data);
}
