import css from "./Sidebar.module.css";

export default function Sidebar({ isOpen, onClose }) {
	return (
		<div className={`${css.sidebarOverlay} ${isOpen ? css.show : ""}`}>
			<div className={css.sidebar}>
				<h2>Sidebar Title</h2>
				<button type="button" onClick={onClose} className={css.closeButton}>
					Close
				</button>
			</div>
		</div>
	);
}
