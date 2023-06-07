import React, { useState, useEffect } from "react";

const Banner = () => {
	const [bannertext, setbannertext] = useState(
		"Chez vous, partout et ailleurs"
	);
	useEffect(() => {
		if (window.location.pathname === "/about") {
			setbannertext("");
		} else {
			setbannertext("Chez vous, partout et ailleurs");
		}
	}, []);

	let bannerAbout = false;

	if (window.location.pathname === "/about") {
		bannerAbout = true;
	} else {
		bannerAbout = false;
	}
	let result = bannerAbout ? "bannerAbout" : "banner";

	return (
		<figure className={result}>
			<h1>{bannertext}</h1>
		</figure>
	);
};

export default Banner;
