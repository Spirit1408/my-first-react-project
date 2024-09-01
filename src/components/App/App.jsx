import "./App.css";
import Product from "../Product/Product.jsx";
import Mailbox from "../Mailbox/Mailbox.jsx";
import { inbox } from "../messages.js";
import { Card } from "../Card/Card.jsx";
import { Alert } from "../Alert/Alert.jsx";
import { User } from "../User/User.jsx";
import AlertBtn from "../AlertBtn/AlertBtn.jsx";
import CustomBtn from "../CustomBtn/CustomBtn.jsx";
import CounterBtn from "../CounterBtn/CounterBtn.jsx";
import ToggleElement from "../ToggleElement/ToggleElement.jsx";
import CounterAll from "../CounterAll/CounterAll.jsx";
import ChangeCoords from "../ChangeCoords/ChangeCoords.jsx";
import NewsAPIFetch from "../NewsAPIFetch/NewsAPIFetch.jsx";
import Memo from "../Memo/Memo.jsx";
import Player from "../Player/Player.jsx";
import Toggle from "../UsageOfCustomHooks/Toggle.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";

export default function App() {
	return (
		<div>
			<div>
				<h1>Products</h1>

				<Product
					name="Tacos with Lime"
					imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
					price={10.99}
				/>
				<Product
					name="Fries and Burguer"
					imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
					price={14.29}
				/>
			</div>

			<hr />

			<Mailbox username="Oleh" messages={inbox} />

			<hr />

			<Card>
				<h3>Some title</h3>
				<p>Some text</p>
			</Card>

			<Card>
				<h3>Some another title</h3>
				<p>Some another text</p>
			</Card>

			<hr />
			<Alert variant="info">
				Would you like to browse our recommended products?
			</Alert>
			<Alert variant="warning" elevated>
				Please update your email!
			</Alert>
			<Alert variant="error" outlined>
				There was an error during transaction!
			</Alert>
			<Alert variant="success">
				Payment received, thank you for your purchase!
			</Alert>

			<hr />

			<User name="Oleh" />

			<hr />

			<AlertBtn />

			<hr />

			<CustomBtn message={"Playing music!"} subClass={"music"}>
				Play some music
			</CustomBtn>
			<CustomBtn message={"Showing movie!"} subClass={"movie"}>
				Show some movie
			</CustomBtn>

			<hr />

			<CounterBtn />
			<CounterBtn />
			<CounterBtn />

			<hr />

			<ToggleElement />

			<hr />

			<CounterAll />

			<hr />

			<ChangeCoords />

			<hr />

			<hr />

			<NewsAPIFetch />

			<hr />

			<Memo />

			<hr />

			<Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />

			<hr />

			<Toggle />

			<hr />

			<UserMenu />
		</div>
	);
}
