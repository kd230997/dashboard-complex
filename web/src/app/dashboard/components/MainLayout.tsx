'use client'

import React from "react";
import styles from "../dashboard.module.scss";
import Button from "./button/Button";

const MainLayout: React.FC = () => {
	return (
		<div className={`${styles["main-layout"]}`}>
			<div className={`${styles["button-demo"]}`}>
				<Button disabled={false} loading={false} onClick={handleButtonClick}> Submit </Button>
			</div>
		</div>
	);
};

const handleButtonClick = () => {
	alert("You clicked button");
};

export default MainLayout;
