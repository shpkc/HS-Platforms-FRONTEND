import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getMainNfts } from "src/domains/NftsDomain";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HomeContents = dynamic(
	() => import("src/components/organisms/home/HomeContents")
);

const Index = () => {
	const { data } = useFetch("main", () => getMainNfts());
	return (
		<LayoutTemplate
			seo={{
				title: "Your Own NFTs",
				description: "World Wide NFTs",
			}}
		>
			<Suspense fallback={<div />}>
				<HomeContents data={data} />
			</Suspense>
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePreFetch("main", () => getMainNfts());

	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
