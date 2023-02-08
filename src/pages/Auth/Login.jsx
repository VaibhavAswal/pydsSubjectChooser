import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
	const [loading1, setloading] = useState(false);
	const [username, setusername] = useState("");
	const [pass, setpass] = useState("");
	const { login, currentUser, loading } = useAuth();
	const navigate = useNavigate();

	const handleLogin = () => {
		setloading(true);
		toast.promise(login(username, pass), {
			loading: "Logging in....",
			success: "Logged in!",
			error: (err) => {
				setloading(false);
				return err.message;
			},
		});
	};
	useEffect(() => {
		if (currentUser) {
			navigate("/admin/panel");
		}
	}, [currentUser]);

	return (
		<div className="login">
			{loading && <h2>Loading...</h2>}
			{!loading && (
				<>
					<input
						type="text"
						placeholder="username"
						onChange={(e) => setusername(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						onChange={(e) => setpass(e.target.value)}
					/>
					<button disabled={loading1} onClick={handleLogin}>
						Login
					</button>
				</>
			)}
		</div>
	);
};

export default Login;
