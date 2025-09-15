"use client";

import styles from "./login.module.scss";
import Input from "@/src/shared/components/input/Input";
import Button from "@/src/shared/components/button/Button";
import { LoginDto, AuthService } from "@/src/services/auth.service";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPages() {
	const [form, setForm] = useState<LoginDto>({ email: "", password: "" });
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const result = await AuthService.login(form);
			if (result.data.access_token) {
				AuthService.saveToken(result.data.access_token);
				router.push("/dashboard");
			} else {
				setError(result.message);
			}
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("Login failed");
			}
		}
	};

	const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setForm((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<div className={styles["login"]}>
			<form autoComplete="true" onSubmit={handleSubmit} className={styles["login__form"]}>
				<Input
					className={styles["login__form__email"]}
					label="Email"
					type="email"
					name="email"
					value={form.email}
					onChange={handleFormChange}
				/>
				<Input
					className={styles["login__form__password"]}
					label="Password"
					type="password"
					name="password"
					value={form.password}
					onChange={handleFormChange}
				/>
				<Button type="submit">Submit</Button>

				{error && <p className={styles["login__form__error"]}>{error}</p>}
			</form>
		</div>
	);
}
