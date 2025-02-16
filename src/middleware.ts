import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const protectedRoutes = [
    "/projects/case-study/protected/volvo-building-an-ecommerce-platform",
  ];

  const cookieStore = req.cookies; // Use cookies API
  const authToken = cookieStore.get("auth_token");

  // Allow access to the login page (prevents redirect loop)
  if (req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // If user is trying to access a protected route
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!authToken || authToken.value !== "valid") {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("redirect", req.nextUrl.pathname); // Store intended page
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/case-study/protected/:path*"], // Protect all `/protected/*` routes
};
