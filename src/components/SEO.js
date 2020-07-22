import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Meta from "../meta";

const SEO = () => {
	const content = Meta[3];

	return (
		<Helmet>
			<title>{content.title}</title>
			<meta name="description" content={content.description}></meta>
			<meta name="keywords" content={content.keywords}></meta>
		</Helmet>
	);
};

export default SEO;
