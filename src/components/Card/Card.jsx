const Card = ({ children }) => (
	<div
		style={{
			display: "inline-block",
			border: "1px solid white",
			width: "200px",
			margin: "0 5px",
		}}
	>
		{children}
	</div>
);

export { Card };
