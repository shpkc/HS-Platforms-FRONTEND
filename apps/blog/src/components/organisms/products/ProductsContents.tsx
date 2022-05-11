import { HsContainer } from "@hs-platforms/hs-core-ui";
import ReactMarkdown from "react-markdown";

const ProductsContents = ({ data }) => {
	console.log(data);
	return (
		<HsContainer padding={["100px 16px 0 16px", "140px 0 0 0"]}>
			<ReactMarkdown children={data.contents} />
		</HsContainer>
	);
};

export default ProductsContents;
