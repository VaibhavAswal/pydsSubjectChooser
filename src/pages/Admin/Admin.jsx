import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { signOut } from "@firebase/auth";
import { toast } from "react-hot-toast";
import { auth } from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { CSVLink } from "react-csv";
import "./Admin.css";

const Admin = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const [data, setdata] = useState([]);
	const [loading, setloading] = useState(true);
	const logOut = () => {
		toast.promise(
			signOut(auth).catch((error) => {
				toast.error("Error logging out");
				console.log(error);
			}),
			{
				loading: "Logging out....",
				success: "Logged out!",
				error: "Error logging out",
			}
		);
	};
	useEffect(() => {
		if (!currentUser) {
			navigate("/admin/login");
		}
	}, [currentUser]);
	useEffect(() => {
		const unsub = () => {
			onSnapshot(doc(db, "data", "data"), (doc) => {
				const a = doc.data();
				setdata(a.data);
				setloading(false);
			});
		};
		return unsub;
	}, []);
	const headers = [
		{ label: "First Name", key: "firstName" },
		{ label: "Last Name", key: "lastName" },
		{ label: "Goal", key: "goal" },
		{ label: "Group 1", key: "group1" },
		{ label: "Group 2", key: "group2" },
		{ label: "Group 3", key: "group3" },
		{ label: "Group 4", key: "group4" },
		{ label: "compulsory", key: "compulsory" },
	];

	return (
		<div className="Admin">
			{loading && <h3>Loading...</h3>}
			{data &&
				data.length > 0 &&
				data.map((detail, id) => {
					return (
						<div key={id} className="adminData">
							<div>
								<p>Name:</p>
								<p>{`${detail.firstName} ${detail.lastName}`}</p>
							</div>
							<div>
								<p>Goal:</p>
								<p>{detail.goal}</p>
							</div>
							<div>
								<p>Subjects:</p>
								<p>{`${detail.compulsory}, ${detail.group1}, ${detail.group2}, ${detail.group3}, ${detail.group4}`}</p>
							</div>
						</div>
					);
				})}
			<div className="adminNav">
				<button onClick={logOut}>logout</button>
				<CSVLink
					filename="subjectsData"
					data={data}
					headers={headers}
					className="csvButton"
				>
					download csv
				</CSVLink>
			</div>
		</div>
	);
};

export default Admin;
