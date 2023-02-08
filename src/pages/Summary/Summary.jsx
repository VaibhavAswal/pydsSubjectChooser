import { useSelector } from "react-redux";
import "./Summary.css";

const Summary = () => {
	const studentData = useSelector((state) => state);
	const submit = () => {
		confirm("Confirm form submission?");
	};
	return (
		<div className="SummaryPage">
			<h2>Summary</h2>
			<div className="summaryBlock">
				<p>Name:</p>
				<p>{`${studentData.firstName} ${studentData.lastName}`}</p>
			</div>
			<div className="summaryBlock">
				<p>Goal:</p>
				<p>{studentData.goal}</p>
			</div>
			<div className="summaryBlock">
				<p>Group 1:</p>
				<p>{studentData.group1}</p>
			</div>
			<div className="summaryBlock">
				<p>Group 2:</p>
				<p>{studentData.group2}</p>
			</div>
			<div className="summaryBlock">
				<p>Group 3:</p>
				<p>{studentData.group3}</p>
			</div>
			<div className="summaryBlock">
				<p>Group 4:</p>
				<p>{studentData.group4}</p>
			</div>
			<div className="summaryBlock">
				<p>Compulsory Sunject:</p>
				<p>{studentData.compulsory}</p>
			</div>

			<div className="submitFinal" onClick={submit}>
				Submit
			</div>
		</div>
	);
};

export default Summary;
