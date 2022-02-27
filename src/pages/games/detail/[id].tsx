import React from "react";
import { dehydrate } from "react-query";
import dynamic from "next/dynamic";
import { GetStaticPaths } from "next";
import { getAllGamesId, getGamesDetailById } from "src/domains/GamesDomain";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import LayoutTemplate from "src/components/templates/LayoutTemplate";

const GamesDetailContents = dynamic(
	() => import("src/components/organisms/games/detail/GamesDetailContents")
);

const GamesDetail = ({ id }: { id: string }) => {
	const { data } = useFetch(`games${id}`, () => getGamesDetailById(id));
	if (!data) {
		return <div />;
	}
	return (
		<LayoutTemplate
			seo={{
				title: data.title,
				description: data.description,
			}}
		>
			<GamesDetailContents data={data.result} id={data.result.id} />
		</LayoutTemplate>
	);
};
export const getStaticProps = async ({
	params: { id },
}: {
	params: { id: string };
}) => {
	const queryClient = await usePreFetch(`games${id}`, () =>
		getGamesDetailById(id)
	);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			id,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { result } = await getAllGamesId();
	const paths = result.map((item: any) => ({
		params: { id: item.id.toString() },
	}));
	return {
		paths,
		fallback: true,
	};
};
export default GamesDetail;
