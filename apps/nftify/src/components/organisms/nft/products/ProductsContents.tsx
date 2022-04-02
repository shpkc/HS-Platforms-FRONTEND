import HsContainer from "src/components/atoms/layout/HsContainer";
import ProductInfo from "./productsComponents/ProductInfo";
import TransactionInfo from "./productsComponents/TransactionInfo";

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
				<TransactionInfo data={data} />
			</HsContainer>
		</HsContainer>
	);
};

export default ProductsContents;
