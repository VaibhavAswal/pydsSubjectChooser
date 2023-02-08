import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { student } from "../../store/store";
import "./GoalSelector.css";

const GoalSelector = () => {
	const studentData = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const proceed = () => {
		if (!studentData.goal) {
			toast.error("Please select a goal");
			return;
		} else {
			navigate("/register/subjects");
		}
	};

	const setJee = () => {
		dispatch(student.setGoal("JEE"));
		dispatch(student.setGroup1("Math"));
		dispatch(student.setGroup2("Chemistry"));
		dispatch(student.setGroup3("Physics"));
	};

	const setNeet = () => {
		dispatch(student.setGoal("Neet"));
		dispatch(student.setGroup2("Chemistry"));
		dispatch(student.setGroup3("Physics"));
		dispatch(student.setGroup4("Biology"));
	};

	const setBanking = () => {
		dispatch(student.setGoal("Banking"));
		dispatch(student.setGroup1("Math"));
	};

	const setBcom = () => {
		dispatch(student.setGoal("B.Com (Honors)"));
		dispatch(student.setGroup1("Chemistry"));
		dispatch(student.setGroup2("BSt."));
		dispatch(student.setGroup1("Accounts"));
	};
	useEffect(() => {
		if (!studentData.firstName && !studentData.lastName) {
			navigate("/");
		}
	}, []);

	return (
		<div className="GoalSelectorPage">
			<div className="GoalIntro">
				Please slect your goal, subjects will be set accordingly*
			</div>
			<div className="goalText">Goal:</div>
			<div
				className={`goalBox ${
					studentData.goal === "B.Com (Honors)" && "active"
				}`}
				onClick={setBcom}
			>
				<div>
					<input
						type="radio"
						name="goal"
						checked={studentData.goal === "B.Com (Honors)"}
					/>
					B.Com ( Honors)
				</div>
			</div>
			<div
				className={`goalBox ${studentData.goal === "Banking" && "active"}`}
				onClick={setBanking}
			>
				<div>
					<input
						type="radio"
						name="goal"
						checked={studentData.goal === "Banking"}
					/>
					Banking
				</div>
			</div>
			<div
				className={`goalBox ${studentData.goal === "Neet" && "active"}`}
				onClick={setNeet}
			>
				<div>
					<input
						type="radio"
						name="goal"
						checked={studentData.goal === "Neet"}
					/>
					Neet
				</div>
			</div>
			<div
				className={`goalBox ${studentData.goal === "JEE" && "active"}`}
				onClick={setJee}
			>
				<div>
					<input
						type="radio"
						name="goal"
						checked={studentData.goal === "JEE"}
					/>
					JEE
				</div>
			</div>
			<div
				className={`goalBox ${
					studentData.goal == "JEE" ||
					studentData.goal == "Neet" ||
					studentData.goal == "Banking" ||
					studentData.goal == "B.Com (Honors)"
						? ""
						: studentData.goal
						? "active"
						: ""
				}`}
			>
				<input
					type="text"
					placeholder="Other"
					value={
						studentData.goal == "JEE" ||
						studentData.goal == "Neet" ||
						studentData.goal == "Banking" ||
						studentData.goal == "B.Com (Honors)"
							? ""
							: studentData.goal
					}
					onChange={(e) => dispatch(student.setGoal(e.target.value))}
				/>
			</div>
			<button
				className="setGoal"
				disabled={studentData.goal ? false : true}
				onClick={proceed}
			>
				Next
			</button>
		</div>
	);
};

export default GoalSelector;
