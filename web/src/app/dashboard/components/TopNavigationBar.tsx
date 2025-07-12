import React from "react";
import styles from "../dashboard.module.scss";

const TopNavigationBar: React.FC = () => {
	return <div className={`${(styles["top-nav"])}`}>
		<h1>This is Navigation Bar</h1>
	</div>;
};

export default TopNavigationBar;
