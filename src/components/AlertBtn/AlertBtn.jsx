import btnAlertClass from "./AlertBtn.module.css";

export default function AlertBtn() {
	const handleClick = () => {
		alert("You clicked me!");
	};

	return (
		<button className={btnAlertClass.alertBtn} onClick={handleClick}>
			Click me!
		</button>
	);
}
