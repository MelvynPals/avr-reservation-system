// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthenticated = request.cookies.get("my-custom-session");

  if (!isAuthenticated && request.nextUrl.pathname === "/calendar") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/calendar",
};
