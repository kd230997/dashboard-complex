import React from "react";

interface SpinnerProps {
	size?: number;
	color?: string;
	className?: string;
}

const Spinner: React.FC<SpinnerProps> = () => (
	<span className="btn__spinner" aria-label="Loading...">
		{/* Simple spinner, replace with your own */}
		<svg width="20" height="20" viewBox="0 0 50 50">
			<circle
				cx="25"
				cy="25"
				r="20"
				fill="none"
				stroke="#999"
				strokeWidth="5"
				strokeDasharray="31.4 31.4"
				transform="rotate(-90 25 25)"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 25 25"
					to="360 25 25"
					dur="1s"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	</span>
);

export default Spinner;
