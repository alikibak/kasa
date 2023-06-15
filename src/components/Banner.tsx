import React, { useState, useEffect } from "react";
import { BannerProps } from "../apiRoutes/types";

const Banner = ({ text }: BannerProps, { image }: BannerProps) => {
	return (
		<figure className="banner" style={{ backgroundImage: `url('${image}')` }}>
			{text && <h1>{text}</h1>}
		</figure>
	);
};

export default Banner;
