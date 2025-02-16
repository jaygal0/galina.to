import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  const { password } = await req.json();
  const validPassword = process.env.PROTECTED_PASSWORD;

  if (password !== validPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Create a session cookie with a 1-hour expiration
  const expires = new Date(Date.now() + 60 * 60 * 1000);
  const cookie = serialize("auth_token", "valid", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires,
  });

  return new NextResponse(JSON.stringify({ message: "Login successful" }), {
    status: 200,
    headers: { "Set-Cookie": cookie },
  });
}
