import { NextResponse } from "next/server";

export function middleware(req) {
  const token =
    req.cookies.get("admin-auth")?.value;

  const pathname =
    req.nextUrl.pathname;

  const isAdminRoute =
    pathname.startsWith("/admin");

  const isLoginPage =
    pathname === "/admin/login";

  const isAdminRoot =
    pathname === "/admin";

  // NOT LOGGED IN
  if (
    isAdminRoute &&
    !isLoginPage &&
    !token
  ) {
    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );
  }

  // LOGGED IN + OPEN LOGIN PAGE
  if (isLoginPage && token) {
    return NextResponse.redirect(
      new URL(
        "/admin/dashboard",
        req.url
      )
    );
  }

  // OPEN /admin
  if (isAdminRoot) {
    if (token) {
      return NextResponse.redirect(
        new URL(
          "/admin/dashboard",
          req.url
        )
      );
    }

    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};