import React from "react";
import "./input.scss";

interface InputProps {
	type?: string;
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	error?: boolean;
	disabled?: boolean;
	autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
	type = "text",
	placeholder,
	value,
	onChange,
	className,
	disabled = false,
	autoFocus = false,
}) => {
	return (
		<input
			disabled={disabled}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			autoFocus={autoFocus}
			className={`spl-input ${className}`} // Use the custom class
		/>
	);
};

export default Input;
