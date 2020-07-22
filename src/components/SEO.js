import React from "react";
import { Helmet } from "react-helmet";
import Meta from "../meta";

const SEO = ({ id }) => {
	let content = Meta[Number(id)];

	return (
		<Helmet>
			<title>{content.title}</title>
			<meta name="description" content={content.description}></meta>
			<meta name="keywords" content={content.keywords}></meta>
		</Helmet>
	);
};

export default SEO;
