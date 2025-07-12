import React from "react";
import styles from "../dashboard.module.scss";
import Button from "./button/Button";

const MainLayout: React.FC = () => {
	return (
		<div className={`${styles["main-layout"]}`}>
			<Button loading={true}> Submit </Button>
		</div>
	);
};

export default MainLayout;
