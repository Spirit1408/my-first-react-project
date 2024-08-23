import clsx from "clsx";
import customBtnClass from './CustomBtn.module.css'

export default function CustomButton({ message, subClass, children }) {
	const alertMessage = () => alert(message);

	return <button className={clsx(customBtnClass.customBtn,customBtnClass[subClass])} onClick={alertMessage}>{children}</button>;
}
