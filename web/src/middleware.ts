import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROUTES } from "@/src/constants/routes";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value;
	const { pathname } = req.nextUrl;

	if (pathname === ROUTES.home.path) {
		return NextResponse.redirect(
			new URL(token ? ROUTES.dashboard.path : ROUTES.login.path, req.url)
		);
	}

	if (!token && pathname.startsWith(ROUTES.dashboard.path)) {
		return NextResponse.redirect(new URL(ROUTES.login.path, req.url));
	}

	if (token && pathname === ROUTES.login.path) {
		return NextResponse.redirect(new URL(ROUTES.dashboard.path, req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/login", "/"],
};
