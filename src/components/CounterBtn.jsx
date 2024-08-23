import counterBtnClass from "./CounterBtn.module.css";
import { useState } from "react";

export default function CounterBtn() {
	const [counter, setCounter] = useState(0);

	const handleCounter = () => {
		setCounter(counter + 1);
	};

	return (
		<button className={counterBtnClass.counterBtn} onClick={handleCounter}>
			{counter}
		</button>
	);
}
