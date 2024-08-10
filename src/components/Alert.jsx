import clsx from "clsx";
import css from "./Alert.module.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
	// const classNames = ["alert", variant];

	// if (outlined) {
	// 	classNames.push("is-outlined");
	// }

	// if (elevated) {
	// 	classNames.push("is-evelated");
	// }

	// return <p className={classNames.join(" ")}>{children}</p>;

	// return (
	// 	<p
	// 		className={clsx("alert", variant, {
	// 			"is-elevated": elevated,
	// 			"is-outlined": outlined,
	// 		})}
	// 	>
	// 		{children}
	// 	</p>
	// );

	return (
		<p
			className={clsx(
				css[variant],
				outlined && css.isOutlined,
				elevated && css.isElevated,
			)}
		>
			{children}
		</p>
	);
};
