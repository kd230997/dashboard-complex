import React from "react";
import Spinner from "../icon/Spinner";
import "./button.scss";


type ButtonProps = {
	children: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: "button" | "submit" | "reset";
	className?: string;
};

const Button: React.FC<ButtonProps> = ({
	children,
	loading = false,
	disabled = false,
	onClick,
	type = "button",
	className = "",
}) => {
	return (
		<button
			type={type}
			className={`btn ${className}`}
			onClick={onClick}
			disabled={disabled || loading}
		>
			{loading ? <Spinner /> : children}
		</button>
	);
};

export default Button;
