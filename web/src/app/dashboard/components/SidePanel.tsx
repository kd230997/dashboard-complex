import React from "react";
import styles from "../dashboard.module.scss";
import Link from "next/link";
import { ROUTES } from "@/src/constants/routes";

const SidePanel: React.FC = () => {
	return (
		<div className={`${styles["side-panel"]}`}>
			<ul>
				<li>
					<Link href={ROUTES.dashboard.children?.balanceLogs.path || ""}>My Balance</Link>
				</li>
			</ul>
		</div>
	);
};

export default SidePanel;
