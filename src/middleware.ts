import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const allCookies = request.cookies.getAll();
  console.log(allCookies);

  const response = NextResponse.next();
  response.cookies.set("x-custom-header", "hello world");

  // return NextResponse.redirect(new URL("/", request.url));
  return response;
}

export const config = {
  matcher: "/profile/:path*",
};
