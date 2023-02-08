import navMenu from "../../assets/navMenu.png";
import close from "../../assets/closeButton.png";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const { pathname } = useLocation();
	//hiding navbar in home
	const [navVisible, setNavVisible] = useState("");
	const [navOpen, setNavOpen] = useState("");
	function showNavbar() {
		// When the scroll is greater than 50 viewport height, add the headerVisible class to the navbar tag
		if (this.scrollY >= 50) {
			setNavVisible("navHidden");
		} else {
			setNavVisible("");
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", showNavbar);
	}, []);

	return (
		<>
			<div className={`navbar ${navVisible}`}>
				<div className="navLeft">
					<p>PYDS L.A.</p>
				</div>
				<div className="navRight">
					<Link
						to="/"
						className={`${
							pathname === "/" || pathname.includes("register") ? "active" : ""
						}`}
					>
						Register
					</Link>
					<Link
						to="/guidlines"
						className={`${pathname === "/guidlines" ? "active" : ""}`}
					>
						Guidlines
					</Link>
					<Link
					// to="/query"
					// className={`${pathname === "/query" ? "active" : ""}`}
					>
						Ask Query
					</Link>
				</div>
				<div className="navMenu">
					<img
						src={navMenu}
						alt="menu"
						onClick={() => setNavOpen("navMenuOpenshow")}
					/>
				</div>
			</div>
			<div className={`nameMenuOpen ${navOpen}`}>
				<div className="navMenuCloseButton">
					<img src={close} alt="clsoeButton" onClick={() => setNavOpen("")} />
				</div>
				<div className="mobileMenu">
					<Link
						to="/"
						className={`${
							pathname === "/" || pathname.includes("register") ? "active" : ""
						}`}
						onClick={() => setNavOpen("")}
					>
						Register
					</Link>
					<Link
						to="/guidlines"
						className={`${pathname === "/guidlines" ? "active" : ""}`}
						onClick={() => setNavOpen("")}
					>
						Guidlines
					</Link>
					<Link
					// to="/query"
					// className={`${pathname === "/query" ? "active" : ""}`}
					// onClick={() => setNavOpen("")}
					>
						Ask Query
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
