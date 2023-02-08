import { db } from "../../firebase/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { student } from "../../store/store";
import { useEffect } from "react";
import "./Summary.css";
import { useNavigate } from "react-router-dom";

const Summary = () => {
	const studentData = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const submit = () => {
		if (confirm("Confirm form submission?")) {
			const time = JSON.stringify(new Date());
			const promise = () => {
				return new Promise((resolve, reject) => {
					dispatch(student.setTime(time));
					const ref = doc(db, "data", "data");
					updateDoc(ref, {
						data: arrayUnion(studentData),
					})
						.then(resolve())
						.catch((err) => reject(err.message));
				});
			};
			toast.promise(promise(), {
				loading: "uploading...",
				success: () => {
					navigate("/");
					dispatch(student.clear());
					return "uploaded";
				},
				error: (err) => {
					return `${err}`;
				},
			});
		} else {
			return;
		}
	};
	useEffect(() => {
		if (
			!studentData.firstName &&
			!studentData.lastName &&
			!studentData.group1 &&
			!studentData.group2 &&
			!studentData.group3 &&
			!studentData.group4
		) {
			navigate("/");
		}
	}, []);
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
