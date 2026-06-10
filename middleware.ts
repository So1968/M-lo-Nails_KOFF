import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isBureauRoute = pathname === "/bureau" || pathname.startsWith("/bureau/");

  if (!isBureauRoute) {
    return NextResponse.next();
  }

  const hasAccess = request.cookies.get("melo_bureau_access")?.value === "ok";

  if (hasAccess) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/acces-bureau", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/bureau/:path*", "/bureau"],
};
