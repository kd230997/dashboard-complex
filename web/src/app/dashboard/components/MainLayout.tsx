import React from "react";
import styles from "../dashboard.module.scss";

const MainLayout: React.FC = () => {
	return (
		<div className={`${styles["main-layout"]}`}>
			<p>This is MainLayout</p>
		</div>
	);
};

export default MainLayout;
