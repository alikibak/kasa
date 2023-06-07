import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="navigation">
			<img src="./LOGO.png" alt="logo" />
			<ul>
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>Acceuil</li>
				</NavLink>
				<NavLink
					to="/about"
					className={(nav) => (nav.isActive ? "nav-active" : "")}
				>
					<li>A propos</li>
				</NavLink>
			</ul>
		</nav>
	);
};

export default Navigation;
