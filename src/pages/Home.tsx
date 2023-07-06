import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Location from "../components/Location";
import Footer from "../components/Footer";

const Home = () => (
	<div>
		<Navigation />
		<Banner
			text="Chez vous, partout et ailleurs"
			image="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
		/>
		<Location />
		<Footer />
	</div>
);

export default Home;
