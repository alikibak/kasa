import React from "react";
import { NavLink } from "react-router-dom";

export interface CardProps {
	location: {
		cover: string;
		title: string;
		id: string;
	};
}

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
