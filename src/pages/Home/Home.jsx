import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { student } from "../../store/store";
import "./Home.css";
const Home = () => {
	const studentData = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const proceed = () => {
		if (!studentData.firstName || !studentData.lastName) {
			toast.error("Please fill all the field");
			return;
		} else {
			navigate("/register/goals");
		}
	};
	return (
		<div className="Home">
			<div className="HomeIntro">
				Enter your details to continue.. and or kux details jo daaalni h yaha
			</div>
			<div className="HomeInputs">
				<input
					type="text"
					placeholder="First Name"
					value={studentData.firstName}
					onChange={(e) => dispatch(student.setFirstName(e.target.value))}
				/>
				<input
					type="text"
					placeholder="Last Name"
					value={studentData.lastName}
					onChange={(e) => dispatch(student.setLastName(e.target.value))}
				/>
			</div>
			<button
				className="HomeContinue"
				disabled={studentData.firstName && studentData.lastName ? false : true}
				onClick={proceed}
			>
				Continue
			</button>
		</div>
	);
};

export default Home;
