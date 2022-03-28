import { GetServerSideProps } from "next";
import { dehydrate } from "react-query";
import ProductsContents from "src/components/organisms/nft/products/ProductsContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { getProductsDetailById } from "src/domains/ProductsDomain";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";

const Products = ({ id }) => {
	const {
		data: { result },
	} = useFetch(`product${id}`, () => getProductsDetailById(id));
	return (
		<LayoutTemplate
			seo={{ title: result.title, description: result.description }}
		>
			<ProductsContents data={result} />
		</LayoutTemplate>
	);
};

export default Products;

export const getServerSideProps: GetServerSideProps = async context => {
	const {
		query: { id },
	} = context;

	const queryClient = await usePreFetch(`product${id}`, () =>
		getProductsDetailById(id)
	);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			id,
		},
	};
};
