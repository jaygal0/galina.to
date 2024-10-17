import locations from "../../../../data/now/location";

export async function GET(req: Request) {
  const data = await locations;
  return Response.json(data);
}
