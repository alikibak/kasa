import React from "react";

const ScrollingMenu = ({ title }: any) => {
	return (
		<div className="dropdown">
			<div className="mainMenu">
				<h1>{title}</h1>
				<img src="./arrow.png" alt="fleche" />
			</div>
			<div className="subMenu">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel,
					veritatis optio molestiae quas quaerat dolore temporibus quod
					perspiciatis hic asperiores libero, doloribus animi, eligendi
					laudantium cumque maiores. Vero, numquam accusantium natus sapiente
					aliquid at culpa! Dolorem cum, asperiores explicabo omnis numquam
					ullam aut animi recusandae fugiat cumque voluptas sed.
				</p>
			</div>
		</div>
	);
};

export default ScrollingMenu;
