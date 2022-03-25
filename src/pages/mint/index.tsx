import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { useFetchInfinite, usePreFetchInfinite } from "src/hooks/query/fetch";
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

export default Mint;
