import { HsContainer } from "@hs-platforms/hs-core-ui";
import ProductInfo from "./productsComponents/ProductInfo";
import PlatformInfo from "./productsComponents/PlatformInfo";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const ProductsContents = ({ data }) => {
	console.log(data);

	return <MDXRemote {...data.contents} />;
};

export default ProductsContents;
