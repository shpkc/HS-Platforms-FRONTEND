import React from "react";
import Header from "../organisms/header/Header";
import { NextSeo } from "next-seo";
import Footer from "../organisms/footer";

// NOTE : 기본적인 seo와 레이아웃
const LayoutTemplate = ({
	seo,
	children,
}: {
	seo: {
		title: string;
		description: string;
		images?: "default/og.png" | string;
	};
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<>
			<NextSeo
				title={`${seo.title} | TEVELOPER`}
				description={seo.description}
				openGraph={{
					type: "website",
					title: `${seo.title}`,
					description: seo.description,
					images: [
						{ url: `${process.env.NEXT_PUBLIC_IMG_HOST}/${seo.images}` },
					],
				}}
			/>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default LayoutTemplate;
