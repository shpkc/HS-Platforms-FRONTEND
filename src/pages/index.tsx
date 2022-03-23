import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getMainGames } from "src/domains/GamesDomain";
import { lazy } from "react";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import dynamic from "next/dynamic";

const HomeContents = dynamic(
	() => import("src/components/organisms/home/HomeContents")
);

const Index = () => {
	const { data } = useFetch("main", () => getMainGames());
	return (
		<LayoutTemplate
			seo={{
				title: "Your Own NFTs",
				description: "World Wide NFTs",
			}}
		>
			<HomeContents data={data} />
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePreFetch("main", () => getMainGames());

	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
