import React, { useState } from "react";

interface CarrousselProps {
	pictures: string[];
}

const Carrousel = ({ pictures }: CarrousselProps) => {
	const [index, setIndex] = useState(1);
	const length = pictures.length;

	const Previous = () => {
		const resetIndex = index - 1;
		setIndex(resetIndex < 1 ? length - 1 : resetIndex);
	};

	const Next = () => {
		const resetIndex = index + 1;
		setIndex(resetIndex >= length ? 1 : resetIndex);
	};

	return (
		<div>
			<div
				className="carrousel"
				style={{ backgroundImage: `url('${pictures[index]}')` }}
			>
				<img src="/arrowLeft.png" alt="putain" onClick={Previous} />
				<p>{index + "/" + `${length - 1}`}</p>
				<img src="/arrowRight.png" alt="pute" onClick={Next} />
			</div>
		</div>
	);
};

export default Carrousel;
