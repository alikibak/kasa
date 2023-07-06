import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Location from "../components/Location";
import Footer from "../components/Footer";

const Home = () => (
	<div>
		<Navigation />
		<Banner
			text="Chez vous, partout et ailleurs"
			image="./styles/assets/IMGAcceuil.png"
		/>
		<Location />
		<Footer />
	</div>
);

export default Home;
