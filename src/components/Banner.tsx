export interface BannerProps {
	image: string;
	text?: string;
}

const Banner = ({ text }: BannerProps, { image }: BannerProps) => {
	return (
		<figure className="banner" style={{ backgroundImage: `url(${image})` }}>
			{text && <h1>{text}</h1>}
		</figure>
	);
};

export default Banner;
