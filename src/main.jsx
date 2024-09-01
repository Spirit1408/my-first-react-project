import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App.jsx";
import "./index.css";
import { UserProvider } from "./userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<App />
	</UserProvider>,
);
