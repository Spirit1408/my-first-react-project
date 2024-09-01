import css from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
	return (
		<div className={`${css.modalOverlay} ${isOpen ? css.show : ""}`}>
			<div className={css.modal}>
				<h2>Modal Title</h2>
				<button type="button" onClick={onClose} className={css.closeButton}>
					Close
				</button>
			</div>
		</div>
	);
}
