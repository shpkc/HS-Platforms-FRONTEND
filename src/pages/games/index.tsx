import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import HomeContents from "src/components/organisms/home/HomeContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { usePrefetchCourts, useQueryCourts } from "src/hooks/query/useCourts";
import { useFetchInfinite, usePreFetchInfinite } from "src/hooks/query/fetch";
import { getGames } from "src/domains/GamesDomain";
import GamesContents from "src/components/organisms/games/GamesContents";

const Games = () => {
	const { data, fetchNextPage } = useFetchInfinite("games", () =>
		getGames({ pageParam: 1 })
	);

	console.log(data);
	return (
		<LayoutTemplate
			seo={{
				title: "",
				description: "",
			}}
		>
			<GamesContents data={data} nextPage={fetchNextPage} />
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
export default Games;
