import { NextResponse } from "next/server";
import timelineData from "../../../../data/timeline/timeline";

export async function GET() {
  const data = await timelineData;
  return NextResponse.json(data);
}
