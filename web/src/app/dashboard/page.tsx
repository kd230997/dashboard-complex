import MainLayout from "./components/MainLayout";
import SidePanel from "./components/SidePanel";
import TopNavigationBar from "./components/TopNavigationBar";
import styles from "./dashboard.module.scss";

export default function Farm() {
	return (
		<div className={styles["dashboard"]}>
			<TopNavigationBar />
			<div className="dashboard__content">
				<SidePanel />
				<MainLayout />
			</div>
		</div>
	);
}
