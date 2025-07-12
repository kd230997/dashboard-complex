import React from "react";
import styles from "../dashboard.module.scss";

const SidePanel: React.FC = () => {
	return (
		<div className={`${styles["side-panel"]}`}>
			<p>This is SidePanel</p>
		</div>
	);
};

export default SidePanel;
