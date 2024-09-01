import { useUser } from "../../userContext";

export default function UserMenu() {
	const { isLoggedIn, username, logIn, logOut } = useUser();
	return (
		<div>
			{isLoggedIn ? (
				<>
					<p>{username}</p>
					<button type="button" onClick={logOut}>
						Log out
					</button>
				</>
			) : (
				<button type="button" onClick={logIn}>
					Log in
				</button>
			)}
		</div>
	);
}
