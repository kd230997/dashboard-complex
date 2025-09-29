/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./style.scss";

type OptionProps = {
	label: string; // make label required (better for clarity)
	value: string | number; // avoid undefined, value should always exist
};

type SelectProps = {
	name: string;
	label?: string;
	disabled?: boolean;
	className?: string;
	options: OptionProps[];
	onChange?: (value: string | number) => void; // pass back the actual object
	value?: string | number;
};

function Select({
	disabled = false,
	className = "",
	label = "",
	options = [],
	onChange,
	value,
	name
}: SelectProps) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selected = options.find(
			(opt) => JSON.stringify(opt.value) === event.target.value
		);
		if (selected && onChange) {
			onChange(selected.value);
		}
	};

	const Label = () =>
		label && (
			<label htmlFor={label} className={`spl-label ${className}`}>
				{label}
			</label>
		);

	return (
		<div className={`spl-select-group ${className}`}>
			<Label />
			<select
				id={label}
				className={`spl-select ${className}`}
				name={name}
				disabled={disabled}
				onChange={handleChange}
				value={value ? JSON.stringify(value) : ""}
			>
				{options.map((element, index) => (
					<option key={index} value={JSON.stringify(element.value)}>
						{element.label}
					</option>
				))}
			</select>
		</div>
	);
}

export { Select };
export type { OptionProps, SelectProps };
