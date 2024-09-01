import { useToggle } from "../../hooks/useToggle";
import Modal from "./Modal/Modal";
import Sidebar from "./Sidebar/Sidebar";
import css from "./Toggle.module.css";

export default function Toggle() {
	const ModalToggle = () => {
		const { isOpen, open, close } = useToggle();

		return (
			<>
				<button type="button" onClick={open}>
					Open modal
				</button>
				{isOpen && <Modal onClose={close} isOpen={isOpen} />}
			</>
		);
	};

	const SidebarToggle = () => {
		const { isOpen, open, close } = useToggle();

		return (
			<>
				<button type="button" onClick={open}>
					Open sidebar
				</button>
				{isOpen && <Sidebar onClose={close} isOpen={isOpen} />}
			</>
		);
	};

	return (
		<div className={css.buttons}>
			<ModalToggle />
			<SidebarToggle />
		</div>
	);
}
