import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</AuthProvider>
	</React.StrictMode>
);
