import React from "react";
import "./input.scss";

interface InputProps {
	type?: string;
	placeholder?: string;
	value?: string;
	label?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	error?: boolean;
	disabled?: boolean;
	autoFocus?: boolean;
	name?: string;
}

const Input: React.FC<InputProps> = ({
	type = "text",
	placeholder,
	value,
	onChange = () => {},
	className = "",
	disabled = false,
	autoFocus = false,
	label = "text",
	name = "",
}) => {
	return (
		<div className={`spl-input-group ${className}`}>
			<label htmlFor={label} className={`spl-label ${className}`}>
				{label}
			</label>
			<input
				disabled={disabled}
				type={type}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
				autoFocus={autoFocus}
				id={label}
				className={`spl-input ${className}`} // Use the custom class
			/>
		</div>
	);
};

export default Input;
