import { NextResponse } from "next/server";
import books from "../../../../data/now/books";

export async function GET() {
  const data = await books;
  return NextResponse.json(data);
}
