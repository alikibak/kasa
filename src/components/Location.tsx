import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { GET_LOCATIONS } from "../apiRoutes";

const Location = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(GET_LOCATIONS).then((res) => setData(res.data));
	}, []);

	return (
		<div className="gallery">
			{data.map((logements, index) => (
				<Card key={index} location={logements} />
			))}
		</div>
	);
};

export default Location;
