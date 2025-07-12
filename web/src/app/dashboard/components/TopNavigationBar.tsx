import React from "react";
import styles from "../dashboard.module.scss";

const TopNavigationBar: React.FC = () => {
	return (
		<div className={`${styles["top-nav"]}`}>
			<p>This is Navigation Bar</p>
		</div>
	);
};

export default TopNavigationBar;
