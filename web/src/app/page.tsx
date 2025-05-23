import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.page}>
			<ul>
				<li>
					<Link href="/farm">Farm</Link>
				</li>
			</ul>
		</div>
	);
}
