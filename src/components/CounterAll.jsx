import { useState } from "react";
import CounterAllBtn from "./CounterAllBtn";

export default function CounterAll() {
	const [counter, setCounter] = useState(0);

	const handleAllCounter = () => {
		setCounter(counter + 1);
	};

	return (
		<div style={{ display: "flex", gap: "5px", justifyContent:"center" }}>
			<CounterAllBtn value={counter} onUpdate={handleAllCounter} />
			<CounterAllBtn value={counter} onUpdate={handleAllCounter} />
			<CounterAllBtn value={counter} onUpdate={handleAllCounter} />
		</div>
	);
}
