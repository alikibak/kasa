import React from "react";

const Card = ({ location }: any) => {
	return (
		<figure
			className="card"
			style={{ backgroundImage: `url('${location.cover}')` }}
		>
			<h2>{location.title}</h2>
		</figure>
	);
};

export default Card;
