import { redirect } from "next/navigation";
import { ROUTES } from "@/src/constants/routes";

export default function DashboardPage() {
	return redirect(ROUTES.dashboard.children?.balanceLogs.path || "");
}
