import styles from "../../farm.module.scss";
import Image from "next/image";

const ToolbarItem: React.FC<ToolbarItemProps> = (props) => {
	return (
		<div className={`${styles["toolbar-item"]} ${props.class}`}>
			<Image src={props.icon} alt={props.name} width={24} height={24} />
		</div>
	);
};

export default function Toolbar() {
	const toolbarItemProps: ToolbarItemProps = {
		key: 0,
		id: 0,
		icon: "../../../../../public/assests/watering-can.png",
		name: "Plant",
		class: styles["toolbar-item-plant"],
		tooltip: "Plant",
		disabled: false,
		hotkey: "P",
	};
	const toolbarItems = new Array(17).fill(toolbarItemProps);

	const toolbarItemsComponent = toolbarItems.map(
		(item: ToolbarItemProps, index) => (
			<ToolbarItem key={index} id={index} icon={item.icon} name={item.name} />
		)
	);
	return <div className={styles.toolbar}>{toolbarItemsComponent}</div>;
}

interface ToolbarItemProps {
	key: number;
	id: number;
	icon: string;
	name: string;
	class?: string;
	tooltip?: string;
	disabled?: boolean;
	hotkey?: string;
}
