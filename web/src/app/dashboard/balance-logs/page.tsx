"use client";

import React from "react";
import styles from "./styles.module.scss";
import Input from "@/src/shared/components/input/Input";

const BalanceTable: React.FC = () => (
	<table>
		<thead>
			<tr>
				<th>Ngày</th>
				<th>Momo (Túi Thần Tài)</th>
				<th>TP Bank</th>
				<th>Tiền Mặt</th>
				<th>Bóp</th>
				<th>Tiền cho mượn</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>09/08/2025</td>
				<td>24454372</td>
				<td>19000000</td>
				<td>226000</td>
				<td>5000000</td>
				<td>48878982</td>
			</tr>
		</tbody>
	</table>
);

const BalanceLogForm: React.FC = () => (
	<div>
		<Input className={`${styles["item"]}`} label="Loại tiền" type="file"></Input>
		<Input label="Số tiền" type="text"></Input>
	</div>
);

export default function BalanceLogPage() {
	return (
		<div className={`${styles["balance-logs"]}`}>
			<BalanceLogForm />
			<br />
			<BalanceTable />
		</div>
	);
}
