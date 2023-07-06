import React from "react";

interface TagsType {
	tag: string;
}

const tags = ({ tag }: TagsType) => {
	return (
		<div className="tagButton">
			<p>{tag}</p>
		</div>
	);
};

export default tags;
