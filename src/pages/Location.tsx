import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_LOCATIONS } from "../apiRoutes";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import { useLocation } from "react-router-dom";
import LocationDescription from "../components/LocationDescription";
import { testFetch } from "../apiRoutes/types";

const PageLocation = () => {
	const locationId = useLocation().pathname.split("/").pop();

	const [locationData, setlocationData] = useState<testFetch | null>();
	const [loading, setLoading] = useState(true);

	const getIdLocation = async () => {
		try {
			const res = await axios(GET_LOCATIONS);
			const currentLocation = res.data.find(
				(location: testFetch) => location.id === locationId
			);
			setlocationData(currentLocation);
		} catch {
			console.log("error");
		}
		setLoading(false);
	};

	useEffect(() => {
		setTimeout(() => {
			getIdLocation();
		}, 1000);
	}, []);
	return (
		<div>
			<Navigation />
			{loading || locationData == null ? (
				<div>Loading...</div>
			) : (
				<div>
					<Carrousel pictures={locationData.pictures} />
					<LocationDescription
						title={locationData.title}
						location={locationData.location}
						name={locationData.host.name}
						picture={locationData.host.picture}
						tags={locationData.tags}
						description={locationData.description}
						equipement={locationData.equipments}
						rating={locationData.rating}
					/>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default PageLocation;
