"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { OptionProps, Select } from "@/src/shared/components/select/Select";
import Input from "@/src/shared/components/input/Input";
import { Button } from "@/src/shared/components/button/Button";

const BalanceLogForm: React.FC = () => {
	const options: OptionProps[] = [
		{ label: "Momo", value: "uuid1" },
		{ label: "TP Bank", value: "uuid2" },
		{ label: "Tiền trong bóp", value: "uuid3" },
		{ label: "Tiền cho mượn", value: "uuid4" },
	];

	const [formData, setFormData] = useState({
		option: "",
		amount: "",
	});

	const handleSelectChange = (value: string | number | undefined) => {
		setFormData((prev) => ({ ...prev, option: value?.toString() ?? "" }));
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(formData);
			}}
			className={`${styles["balance-logs-form"]}`}
		>
			<div className={`${styles["balance-logs-form__log-form"]}`}>
				<Select
					label="Choose the money types"
					name="Money Type"
					options={options}
					onChange={handleSelectChange}
					value={formData.option}
				/>
				<Input label="Amount" name="Amount of Money" />
			</div>
			<div className="balance-logs-form__action">
				<Button type="submit">Submit</Button>
			</div>
		</form>
	);
};

export default function BalanceLogPage() {
	return (
		<div className={`${styles["balance-logs"]}`}>
			<h1>Add new money type</h1>
			<br />
			<BalanceLogForm />
		</div>
	);
}
