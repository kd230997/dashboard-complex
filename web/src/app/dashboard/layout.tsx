import MainLayout from "./components/MainLayout";
import SidePanel from "./components/SidePanel";
import TopNavigationBar from "./components/TopNavigationBar";
import styles from "./dashboard.module.scss";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className={styles["dashboard"]}>
				<TopNavigationBar />
				<div className={styles["dashboard__content"]}>
					<SidePanel />
					<MainLayout>{children}</MainLayout>
				</div>
			</div>
		</>
	);
}
