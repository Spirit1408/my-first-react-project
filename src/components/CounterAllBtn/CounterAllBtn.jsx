import counterBtnClass from "../CounterBtn/CounterBtn.module.css";

export default function CounterAllBtn({ value, onUpdate }) {
	return (
		<button className={counterBtnClass.counterBtn} onClick={onUpdate}>
			{value}
		</button>
	);
}
