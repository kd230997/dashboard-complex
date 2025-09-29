import React, { HTMLInputTypeAttribute } from "react";
import "./style.scss";

interface InputProps {
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	value?: string;
	label?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	error?: boolean;
	disabled?: boolean;
	autoFocus?: boolean;
	name?: string;
	autoComplete?: string;
	required?: boolean;
}

const Input: React.FC<InputProps> = ({
	type = "text",
	placeholder = "Please enter...",
	value,
	onChange = () => {},
	className = "",
	disabled = false,
	autoFocus = false,
	label = "text",
	name = "",
	required = false,
	autoComplete = "off",
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
				required={required}
				autoComplete={autoComplete}
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
