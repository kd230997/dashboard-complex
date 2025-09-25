const routesBuilder = (routes: string[]) => {
	return `/${routes.join("/")}`;
};

const routesPath = {
	login: "login",
	dashboard: "dashboard",
	balanceLogs: "balance-logs",
};

export interface AppRoute {
	path: string;
	label?: string;
	children?: Record<string, AppRoute>;
}

export const ROUTES: Record<string, AppRoute> = {
	home: { path: routesBuilder([""]), label: "Home" },
	login: {
		path: routesBuilder([routesPath.login]),
		label: "Login",
	},
	dashboard: {
		path: `${routesBuilder([routesPath.dashboard])}`,
		label: "Dashboard",
		children: {
			balanceLogs: {
				path: `${routesBuilder([
					routesPath.dashboard,
					routesPath.balanceLogs,
				])}`,
				label: "Balance Logs"
			},
		},
	},
};
