import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subjects from "./pages/SubjectsPage/Subjects";
import GoalSelector from "./pages/GoalSelectorPage/GoalSelector";
import Summary from "./pages/Summary/Summary";
import Guidlines from "./pages/Guidlines/Guidlines";
import { useEffect } from "react";
import Login from "./pages/Auth/Login";
import Admin from "./pages/Admin/Admin";

function App() {
	// To adjust hieght om mobile devices having address bar appearing diappearing
	useEffect(() => {
		window.addEventListener("resize", function () {
			let vh = window.innerHeight;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		});
		window.addEventListener("load", function () {
			let vh = window.innerHeight;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		});
	}, []);
	return (
		<div className="App">
			<Toaster />
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/register/goals" element={<GoalSelector />} />
					<Route exact path="/register/subjects" element={<Subjects />} />
					<Route exact path="/register/summary" element={<Summary />} />
					<Route exact path="/guidlines" element={<Guidlines />} />
					<Route exact path="/admin/login" element={<Login />} />
					<Route exact path="/admin/panel" element={<Admin />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
