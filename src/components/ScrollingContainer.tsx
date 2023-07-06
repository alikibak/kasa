import React from "react";
import ScrollingMenu from "./ScrollingMenu";

const ScrollingContainer = () => {
	return (
		<div className="ScrollingContainter">
			<ScrollingMenu title="Fiabilité" text="lorem100" />

			<ScrollingMenu title="Respect" text="lorem100" />

			<ScrollingMenu title="Service" text="lorem100" />

			<ScrollingMenu title="Sécurité" text="lorem100" />
		</div>
	);
};

export default ScrollingContainer;
