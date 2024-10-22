import { NextResponse } from "next/server";
import locations from "../../../../data/now/location";

export async function GET() {
  const data = await locations;
  return NextResponse.json(data);
}
