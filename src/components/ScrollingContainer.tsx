import React from "react";
import ScrollingMenu from "./ScrollingMenu";

const ScrollingContainer = () => {
	return (
		<div className="ScrollingContainter">
			<ul>
				<li>
					<ScrollingMenu title="Fiabilité" />
				</li>
				<li>
					<ScrollingMenu title="Respect" />
				</li>
				<li>
					<ScrollingMenu title="Service" />
				</li>
				<li>
					<ScrollingMenu title="Sécurité" />
				</li>
			</ul>
		</div>
	);
};

export default ScrollingContainer;
