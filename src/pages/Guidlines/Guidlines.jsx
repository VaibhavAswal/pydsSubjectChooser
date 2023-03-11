import { useNavigate } from "react-router-dom";
import "./Guidlines.css";

const Guidlines = () => {
	const navigate = useNavigate();
	const proceed = ()=>{
			navigate("/register/subjects");
	}
	return (
		<div className="guidlines">
			<ul>
				<li>
					A total of 5 subjects to be taken (English and 4 other subjects)
				</li>
				<li>Computer science cannot be taken without math.</li>
				<li>Accounts cannot be tanken without BSt.</li>
				<li>
					To pursue B.com (Honors), Math is compulsory to take with Accounts and
					BSt. in classes XI and XII.
				</li>
				<li>To pursue banking it is compulsory to take up Math.</li>
				<li>
					To appear in Neet taking Physics, Chemistry and Bio together is
					compulsory.
				</li>
				<li>
					To appear in JEE Main taking Physics, Chemistry and Math compulsory.
				</li>
			</ul>
			<button
				className="guidlinesButton"
				onClick={proceed}
			>
				Next
			</button>
		</div>
	);
};

export default Guidlines;
