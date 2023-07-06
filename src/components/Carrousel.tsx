import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_LOCATIONS } from "../apiRoutes";
import { infoLocation } from "../apiRoutes/types";

const Carrousel = () => {
	const pathname = window.location.pathname;
	const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
	const [data, setData] = useState<infoLocation[]>([]);
	useEffect(() => {
		axios
			.get(GET_LOCATIONS)
			.then((res) =>
				setData(res.data.filter((photo: infoLocation) => photo.id === segment))
			);
	}, []);
	const test = data.map((infoLocation) => {
		return infoLocation.pictures;
	});
	console.log(test);
	// const arrowLeft = document.querySelector(".arrow_left");
	// const arrowRight = document.querySelector(".arrow_right");

	// // arrowLeft?.addEventListener("click", slideLeft);
	// arrowRight?.addEventListener("click", slideRight);
	// let slide = 0;

	// function slideRight() {
	// 	if (slide != data.length - 1) {
	// 		slide++;
	// 		const images = document.querySelector(".carrousel img") as HTMLElement;
	// 		images.src = data[slide].pictures;
	// 		const textes = document.querySelector("#banner p");
	// 	} else {
	// 		slide = 0;
	// 		const images = document.querySelector(".banner-img");
	// 		images.src = data[slide].image;
	// 		const textes = document.querySelector("#banner p");
	// 	}
	// }

	// function slideLeft() {
	// 	if (slide != 0) {
	// 		slide--;
	// 		const images = document.querySelector(".banner-img") as HTMLElement;
	// 		images.src = data[slide].image;
	// 		const textes = document.querySelector("#banner p");
	// 	} else {
	// 		slide = data.length - 1;
	// 		const images = document.querySelector(".banner-img") as HTMLElement;
	// 		images.src = data[slide].image;
	// 		const textes = document.querySelector("#banner p");
	// 	}
	// }

	return (
		<div>
			<span className="arrow_left">
				<img src="/arrowLeft.png" alt="arrow_left" />
			</span>
			<span className="arrow_right">
				<img src="/arrowRight.png" alt="arrow_right" />
			</span>
			<img className="carrousel-img" src="" alt="Banner location" />
			<div className="dots"></div>
		</div>
	);
};

export default Carrousel;
