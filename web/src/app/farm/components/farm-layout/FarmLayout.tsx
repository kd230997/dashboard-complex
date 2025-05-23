import styles from "../../farm.module.scss";
import FarmTile from "./FarmTile";

export default function FarmLayout() {
	const farmTiles = new Array(10 * 12).fill(1);
	const farmTilesComponent = farmTiles.map((tile, index) => (
		<FarmTile key={index} />
	));

	return <div className={styles["layout"]}>{farmTilesComponent}</div>;
}
