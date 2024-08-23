import { useState } from "react";

export default function ToggleElement() {
	const [state, setState] = useState(false);

	const handleState = () => {
		setState(!state);
	};

	return (
		<>
			<button onClick={handleState}>{state ? "Hide" : "Show"}</button>
			{state && <p>Now you can see me!</p>}
		</>
	);
}
