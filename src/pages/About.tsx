import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import ScrollingContainer from "../components/ScrollingContainer";
import Footer from "../components/Footer";

const About = () => {
	return (
		<div>
			<Navigation />
			<Banner text="" image="../styles/assets/IMGAbout.png" />
			<ScrollingContainer />
			<Footer />
		</div>
	);
};

export default About;
