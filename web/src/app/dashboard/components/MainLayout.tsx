"use client";

import React from "react";
import styles from "../dashboard.module.scss";

const MainLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <div className={`${styles["main-layout"]}`}>{children}</div>;
};

export default MainLayout;
