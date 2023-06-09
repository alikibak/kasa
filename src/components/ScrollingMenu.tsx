import React from "react";
import { ScrollingType } from "../apiRoutes/types";

const ScrollingMenu = ({ title, text }: ScrollingType) => {
	return (
		<div className="dropdown">
			<div className="mainMenu">
				<h1>{title}</h1>
				<img src="./arrow.png" alt="fleche" />
			</div>
			<div className="subMenu">
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ScrollingMenu;
