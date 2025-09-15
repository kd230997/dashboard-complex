import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value;
	const { pathname } = req.nextUrl;

	// 🚫 Not logged in → redirect to login
	if (!token && (pathname.startsWith("/dashboard") || pathname === "/")) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	// ✅ Already logged in → redirect away from login
	if (token && pathname.startsWith("/login")) {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/login", "/"],
};
