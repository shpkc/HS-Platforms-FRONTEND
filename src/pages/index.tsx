import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getMainGames } from "src/domains/GamesDomain";
import { lazy, Suspense } from "react";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

const HomeContents = lazy(
	() => import("src/components/organisms/home/HomeContents")
);

const Index = () => {
	const { data } = useFetch("main", () => getMainGames());
	return (
		<Suspense fallback={<div />} key={"home"}>
			<LayoutTemplate
				seo={{
					title: "NFT GAMES",
					description: "World Wide NFT Games",
				}}
			>
				<HomeContents data={data} />
			</LayoutTemplate>
		</Suspense>
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
