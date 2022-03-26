import LayoutTemplate from "src/components/templates/LayoutTemplate";
import CreateContents from "src/components/organisms/create/CreateContents";

const Mint = () => {
	return (
		<LayoutTemplate
			seo={{
				title: "Create NFT",
				description: "NFT GAMES",
			}}
		>
			<CreateContents />
		</LayoutTemplate>
	);
};

export default Mint;
