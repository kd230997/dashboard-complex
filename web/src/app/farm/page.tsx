import FarmInfo from "./components/FarmInfo";
import FarmZone from "./components/FarmZone";
import styles from "./farm.module.scss";

export default function Farm() {
	return (
		<div className={styles["farm-screen"]}>
			<FarmInfo />
			<FarmZone />
		</div>
	);
}
