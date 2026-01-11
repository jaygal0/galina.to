import { NextResponse } from "next/server";
import experience from "../../../../data/home/experience";

export async function GET() {
  const data = await experience;
  return NextResponse.json(data);
}
