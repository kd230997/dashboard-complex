import React from "react";
import "./accordion.scss";
import ArrowUp from "@/shared/components/icon/ArrowUp";
import ArrowDown from "@/shared/components/icon/ArrowDown";

interface AccordionProps {
	children: React.ReactNode;
	className?: string;
	title?: string;
	onToggle?: (isOpen?: boolean) => void;
	CustomIcon?: React.FC<{ isOpen: boolean }>;
	defaultOpen?: boolean;
	disabled?: boolean;
}

const AccordionIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
	<span className={`accordion-icon ${isOpen ? "arrow-up" : "arrow-down"}`}>
		{isOpen ? <ArrowUp /> : <ArrowDown />}
	</span>
);

const Accordion: React.FC<AccordionProps> = ({
	children,
	className = "",
	title = "",
	CustomIcon = AccordionIcon,
	onToggle,
	defaultOpen = false,
	disabled = false,
}) => {
	const [isOpen, setIsOpen] = React.useState(defaultOpen);

	const handleToggle = () => {
		if (disabled) return;
		const newState = !isOpen;
		setIsOpen(newState);
		onToggle?.(newState);
	};

	return (
		<div className={`accordion ${className}`}>
			<div
				onClick={handleToggle}
				className={`top-side ${disabled ? "disabled" : ""}`}
			>
				<h4 className="accordion-title">{title}</h4>
				<div className={`${isOpen ? "arrow-up" : "arrow-down"} btn-toggle`}>
					<CustomIcon isOpen={isOpen} />
				</div>
			</div>
			<div className={`content ${isOpen ? "content--open" : ""}`}>
				{children}
			</div>
		</div>
	);
};

export default Accordion;
