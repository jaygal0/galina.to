import { NextResponse } from "next/server";
import now from "../../../../data/now/now";

export async function GET() {
  const data = await now;
  return NextResponse.json(data);
}
