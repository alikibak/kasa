export interface ScrollingType {
	title: string;
	text : string;
}

export interface CardProps {
	location: {
		cover: string;
		title: string;
		id: string;
	};
}

export interface BannerProps {
	image: string;
	text?: string;
};

export interface infoLocation {
	id : string;
	pictures : string;
}