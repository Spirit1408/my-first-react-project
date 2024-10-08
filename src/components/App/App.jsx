import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from "react-router-dom";
import { inbox } from "../messages.js";
import { Card } from "../Card/Card.jsx";
import { Alert } from "../Alert/Alert.jsx";
import { User } from "../User/User.jsx";
import { lazy, Suspense } from "react";

const Product = lazy(() => import("../Product/Product.jsx"));
const Mailbox = lazy(() => import("../Mailbox/Mailbox.jsx"));
const AlertBtn = lazy(() => import("../AlertBtn/AlertBtn.jsx"));
const CustomBtn = lazy(() => import("../CustomBtn/CustomBtn.jsx"));
const CounterBtn = lazy(() => import("../CounterBtn/CounterBtn.jsx"));
const ToggleElement = lazy(() => import("../ToggleElement/ToggleElement.jsx"));
const CounterAll = lazy(() => import("../CounterAll/CounterAll.jsx"));
const ChangeCoords = lazy(() => import("../ChangeCoords/ChangeCoords.jsx"));
const NewsAPIFetch = lazy(() => import("../NewsAPIFetch/NewsAPIFetch.jsx"));
const Memo = lazy(() => import("../Memo/Memo.jsx"));
const Player = lazy(() => import("../Player/Player.jsx"));
const Toggle = lazy(() => import("../UsageOfCustomHooks/Toggle.jsx"));
const UserMenu = lazy(() => import("../UserMenu/UserMenu.jsx"));

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul className="navbar">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/products">Products</NavLink>
						</li>
						<li>
							<NavLink to="/cards">Cards</NavLink>
						</li>
						<li>
							<NavLink to="/mailbox">Mailbox</NavLink>
						</li>
						<li>
							<NavLink to="/alerts">Alerts</NavLink>
						</li>
						<li>
							<NavLink to="/user">User</NavLink>
						</li>
						<li>
							<NavLink to="/buttons">Buttons</NavLink>
						</li>
						<li>
							<NavLink to="/counter">Counter</NavLink>
						</li>
						<li>
							<NavLink to="/toggle-element">Toggle Element</NavLink>
						</li>
						<li>
							<NavLink to="/coords">Change Coords</NavLink>
						</li>
						<li>
							<NavLink to="/news">News API Fetch</NavLink>
						</li>
						<li>
							<NavLink to="/memo">Memo</NavLink>
						</li>
						<li>
							<NavLink to="/player">Player</NavLink>
						</li>
						<li>
							<NavLink to="/toggle">Toggle</NavLink>
						</li>
						<li>
							<NavLink to="/user-menu">User Menu</NavLink>
						</li>
					</ul>
				</nav>

				<Suspense fallback={<div>Loading page...</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/cards" element={<Cards />} />
						<Route
							path="/mailbox"
							element={<Mailbox username="Oleh" messages={inbox} />}
						/>
						<Route path="/alerts" element={<Alerts />} />
						<Route path="/user" element={<User name="Oleh" />} />
						<Route path="/buttons" element={<Buttons />} />
						<Route path="/counter" element={<Counter />} />
						<Route path="/toggle-element" element={<ToggleElement />} />
						<Route path="/coords" element={<ChangeCoords />} />
						<Route path="/news" element={<NewsAPIFetch />} />
						<Route path="/memo" element={<Memo />} />
						<Route
							path="/player"
							element={
								<Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
							}
						/>
						<Route path="/toggle" element={<Toggle />} />
						<Route path="/user-menu" element={<UserMenu />} />
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
}

function Home() {
	return <h1>Welcome to my first React app!</h1>;
}

function Products() {
	return (
		<div>
			<h1>Products</h1>
			<Product
				name="Tacos with Lime"
				imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
				price={10.99}
			/>
			<Product
				name="Fries and Burger"
				imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
				price={14.29}
			/>
		</div>
	);
}

function Cards() {
	return (
		<>
			<Card>
				<h3>Some title</h3>
				<p>Some text</p>
			</Card>
			<Card>
				<h3>Some another title</h3>
				<p>Some another text</p>
			</Card>
		</>
	);
}

function Alerts() {
	return (
		<>
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
		</>
	);
}

function Buttons() {
	return (
		<>
			<AlertBtn />
			<CustomBtn message={"Playing music!"} subClass={"music"}>
				Play some music
			</CustomBtn>
			<CustomBtn message={"Showing movie!"} subClass={"movie"}>
				Show some movie
			</CustomBtn>
		</>
	);
}

function Counter() {
	return (
		<div className="counterBtns">
			<div>
				<CounterBtn />
				<CounterBtn />
				<CounterBtn />
			</div>
			<div>
				<CounterAll />
			</div>
		</div>
	);
}
