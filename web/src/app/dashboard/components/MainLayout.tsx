"use client";

import React from "react";
import styles from "../dashboard.module.scss";
import Accordion from "@/shared/components/accordion/accordion";

const MainLayout: React.FC = () => {
	return (
		<div className={`${styles["main-layout"]}`}>
			<div className={styles["grid"]}>
				<div className={`${styles["item-1"]}`}>
					<Accordion
						title="Accordion Title"
						onToggle={(isOpen) => console.log(`Toggle is ${isOpen}`)}
					>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
						<p>This is the content of the accordion.</p>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
