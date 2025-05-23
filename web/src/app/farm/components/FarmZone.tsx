import styles from "../farm.module.scss";
import FarmLayout from "./farm-layout/FarmLayout";
import Toolbar from "./toolbar/Toolbar";

export default function FarmZone() {
	return (
		<div className={styles["farm"]}>
			<Toolbar />
			<FarmLayout />
		</div>
	);
}
