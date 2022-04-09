import { HsContainer } from "@hs-platforms/hs-core-ui";
import ProductInfo from "./productsComponents/ProductInfo";
import PlatformInfo from "./productsComponents/PlatformInfo";

const ProductsContents = ({ data }) => {
	return (
		<HsContainer padding={["100px 16px 0 16px", "140px 0 0 0"]}>
			<HsContainer
				display={["block", "flex"]}
				justifyContent="space-between"
				width={["100%", "1200px"]}
				margin="0 auto"
			>
				<ProductInfo data={data} />
				<PlatformInfo data={data} />
			</HsContainer>
		</HsContainer>
	);
};

export default ProductsContents;
