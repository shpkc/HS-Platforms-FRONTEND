import { dehydrate } from "react-query";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import MintContents from "src/components/organisms/mint/MintContents";

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
