import now from "../../../../data/now/now";

export async function GET(req: Request) {
  const data = await now;
  return Response.json(data);
}
