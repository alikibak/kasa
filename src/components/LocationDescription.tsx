import Tags from "./Tags";
import ScrollingMenu from "./ScrollingMenu";
import EmptyStar from "./EmptyStar";
import ColoredStar from "./ColoredStar";

interface Description {
	title: string;
	location: string;
	name: string;
	picture: string;
	tags: string[];
	description: string;
	equipement: string[];
	rating: string;
}

const LocationDescription = ({
	title,
	location,
	name,
	picture,
	description,
	equipement,
	tags,
	rating,
}: Description) => {
	let testInt = parseInt(rating, 10);
	let testcolored = [];
	let testempty = [];
	for (let i = 0; i < testInt; i++) {
		testcolored.push(i);
	}
	for (let i = testcolored.length; i < 5; i++) {
		testempty.push(i);
	}
	return (
		<div>
			<div className="descriptionContainer">
				<div className="title-tag">
					<h1>{title}</h1>
					<h2>{location}</h2>
					<div className="tagContainer">
						{tags.map((tag, index) => (
							<Tags key={index} tag={tag} />
						))}
					</div>
				</div>
				<div className="rating-hote">
					<div className="hoteContainer">
						<p>{name}</p>
						<figure>
							<img src={picture} alt="portrait hote" />
						</figure>
					</div>
					<div className="ratingContainer">
						{testcolored.map((index) => (
							<ColoredStar key={index} />
						))}
						{testempty.map((index) => (
							<EmptyStar key={index} />
						))}
					</div>
				</div>
			</div>
			<div className="scrollingLocation">
				<ScrollingMenu title="Description" text={description} />
				<ScrollingMenu title="Équipements" text={equipement} />
			</div>
		</div>
	);
};

export default LocationDescription;
