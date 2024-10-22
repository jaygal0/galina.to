import { NextResponse } from "next/server";
import careers from "../../../../data/now/career";

export async function GET() {
  const data = await careers;
  return NextResponse.json(data);
}
