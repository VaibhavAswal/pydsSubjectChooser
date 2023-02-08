import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subjects from "./pages/SubjectsPage/Subjects";
import GoalSelector from "./pages/GoalSelectorPage/GoalSelector";
import Summary from "./pages/Summary/Summary";
import Guidlines from "./pages/Guidlines/Guidlines";

function App() {
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
				</Routes>
			</Router>
		</div>
	);
}

export default App;
