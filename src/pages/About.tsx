import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import ScrollingContainer from "../components/ScrollingContainer";
import Footer from "../components/Footer";
import IMGAbout from "../styles/assets/IMGAbout.png";

const About = () => {
	return (
		<div>
			<Navigation />
			<Banner text="" image={IMGAbout} />
			<ScrollingContainer />
			<Footer />
		</div>
	);
};

export default About;
