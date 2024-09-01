import { FaReact } from "react-icons/fa";

export const User = ({ name }) => {
	return (
		<p
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5px",
			}}
		>
			<FaReact style={{ color: "lightblue" }} size={20} />
			Hi {name}!
		</p>
	);
};
