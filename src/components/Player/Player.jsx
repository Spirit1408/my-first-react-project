import { useEffect, useRef } from "react";
import css from "./Player.module.css";
import { CustomButton } from "./CustomButton/CustomButton";

export default function Player({ source }) {
	const playerRef = useRef();
	const btnRef = useRef();

	const play = () => playerRef.current.play();

	const pause = () => playerRef.current.pause();
	console.log(playerRef);

	useEffect(() => {
		btnRef.current.focus();
	}, []);

	return (
		<div className={css.video}>
			<video ref={playerRef} src={source}>
				Sorry, ypur browser doesn't support embedded videos
			</video>

			<div className={css.btns}>
				<button type="button" onClick={play}>
					Play
				</button>
				<button type="button" onClick={pause}>
					Pause
				</button>
			</div>

			<CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
		</div>
	);
}
