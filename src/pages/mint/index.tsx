import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { useFetchInfinite, usePreFetchInfinite } from "src/hooks/query/fetch";
import { getGames } from "src/domains/GamesDomain";
import GamesContents from "src/components/organisms/games/GamesContents";
import MintContents from "src/components/organisms/mint/MintComponents";

const Mint = () => {
	return (
		<LayoutTemplate
			seo={{
				title: "Create NFT",
				description: "NFT GAMES",
			}}
		>
			<MintContents />
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
export default Mint;
