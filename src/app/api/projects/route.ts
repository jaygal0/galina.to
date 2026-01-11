import { NextResponse } from "next/server";
import projects from "@/../data/projects";

export async function GET() {
  const data = await projects;
  return NextResponse.json(data);
}
