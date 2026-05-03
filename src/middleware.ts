import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/profile") {
    return NextResponse.next();
  }

  const userCookie = req.cookies.get("user")?.value;

  if (!userCookie) {
    req.nextUrl.pathname = "/profile";
    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
}
