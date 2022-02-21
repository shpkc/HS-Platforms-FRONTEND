import React from "react";
import Header from "../organisms/header/Header";
import { NextSeo } from "next-seo";

// NOTE : 기본적인 seo와 레이아웃
const LayoutTemplate = ({
	seo,
	children,
}: {
	seo: {
		title: string;
		description: string;
	};
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<>
			<NextSeo
				title={`${seo.title} | TEAMIT`}
				description={seo.description}
				openGraph={{
					type: "website",
					title: `${seo.title}`,
					description: seo.description,
					images: [{ url: `${process.env.IMG_HOST}/default/og.png` }],
				}}
			/>
			<Header />
			{children}
		</>
	);
};

export default LayoutTemplate;
