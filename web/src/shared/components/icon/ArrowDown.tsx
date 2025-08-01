import React from "react";

interface ArrowDownProps {
	size?: number;
	color?: string;
	className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = () => (
	<span className="arrow-down-icon">
		<svg
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 7.85303L10 12.853L15 7.85303"
				stroke="#1E1E1E"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	</span>
);

export default ArrowDown;
