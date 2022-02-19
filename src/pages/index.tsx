import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { useFetchInfinite, usePreFetchInfinite } from "src/hooks/query/fetch";
import { getGames } from "src/domains/GamesDomain";
import GamesContents from "src/components/organisms/games/GamesContents";
import HomeContents from "src/components/organisms/home/HomeContents";

const Index = () => {
	const { data, fetchNextPage } = useFetchInfinite("games", () =>
		getGames({ pageParam: 1 })
	);
	return (
		<LayoutTemplate
			seo={{
				title: "",
				description: "",
			}}
		>
			<HomeContents data={data} />
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePreFetchInfinite("games", () =>
		getGames({ pageParam: 1 })
	);

	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
