import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Location = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("./logements.json").then((res) => setData(res.data));
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
