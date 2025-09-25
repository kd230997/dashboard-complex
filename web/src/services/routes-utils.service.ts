import { ROUTES, AppRoute } from "@/src/constants/routes";

/**
 * Recursively find route by path
 */
export function findRouteByPath(
	path: string,
	routes: Record<string, AppRoute> = ROUTES
): AppRoute | null {
	for (const key in routes) {
		const route = routes[key];
		if (route.path === path) return route;
		if (route.children) {
			const child = findRouteByPath(path, route.children);
			if (child) return child;
		}
	}
	return null;
}

/**
 * Generate breadcrumbs from path
 */
export function getBreadcrumbs(
	path: string,
	routes: Record<string, AppRoute> = ROUTES
): AppRoute[] {
	const crumbs: AppRoute[] = [];

	function dfs(rts: Record<string, AppRoute>, parents: AppRoute[]) {
		for (const key in rts) {
			const route = rts[key];
			const newParents = [...parents, route];
			if (route.path === path) {
				crumbs.push(...newParents);
				return true;
			}
			if (route.children && dfs(route.children, newParents)) {
				return true;
			}
		}
		return false;
	}

	dfs(routes, []);
	return crumbs;
}
