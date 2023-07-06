import React from "react";
import { CardProps } from "../apiRoutes/types";
import { NavLink } from "react-router-dom";

const Card = ({ location }: CardProps) => {
	return (
		<NavLink to={`/location/${location.id}`}>
			<figure
				className="card"
				style={{ backgroundImage: `url('${location.cover}')` }}
			>
				<h2>{location.title}</h2>
			</figure>
		</NavLink>
	);
};

export default Card;
