import { NextResponse } from "next/server";
import experience from "@/../data/experience";

export async function GET() {
  const data = await experience;
  return NextResponse.json(data);
}
