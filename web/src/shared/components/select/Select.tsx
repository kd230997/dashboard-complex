import React from "react";
import "./style.scss";

type SelectProps = {
	name?: string;
	disabled?: boolean;
	className?: string;
	listOptions: [];
};

const Button: React.FC<SelectProps> = ({
	disabled = false,
	className = "",
	name = "",
	listOptions = []
}) => {
	return (
		<select className={className} name={name} disabled={disabled}></select>
	);
};

export default Button;
