import React from "react";
import ScrollingMenu from "./ScrollingMenu";

const ScrollingContainer = () => {
	return (
		<div className="ScrollingContainter">
			<ul>
				<li>
					<ScrollingMenu title="Fiabilité" text="lorem100" />
				</li>
				<li>
					<ScrollingMenu title="Respect" text="lorem100" />
				</li>
				<li>
					<ScrollingMenu title="Service" text="lorem100" />
				</li>
				<li>
					<ScrollingMenu title="Sécurité" text="lorem100" />
				</li>
			</ul>
		</div>
	);
};

export default ScrollingContainer;
