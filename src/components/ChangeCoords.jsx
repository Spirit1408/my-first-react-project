import { useState } from "react";

export default function ChangeCoords() {
	const [values, setValues] = useState({ x: 0, y: 0 });

	const updateX = () => {
		setValues({
			...values,
			x: values.x + 1,
		});
	};

	const updateY = () => {
		setValues({ ...values, y: values.y + 1 });
	};

	return (
		<div>
			<p>
				X: {values.x}, Y: {values.y}
			</p>
			<div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
				<button onClick={updateX}>Update X</button>
				<button onClick={updateY}>Update Y</button>
			</div>
		</div>
	);
}
