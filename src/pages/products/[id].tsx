import { GetStaticPaths } from "next";
import { dehydrate } from "react-query";
import ProductsContents from "src/components/organisms/nft/products/ProductsContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import {
	getAllProductsId,
	getProductsDetailById,
} from "src/domains/ProductsDomain";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";

const Products = ({ id }: { id: string }) => {
	const { data } = useFetch(`products${id}`, () => getProductsDetailById(id));
	if (!data) {
		return <div />;
	}
	return (
		<LayoutTemplate
			seo={{ title: data.result.title, description: data.result.description }}
		>
			<ProductsContents data={data.result} />
		</LayoutTemplate>
	);
};

export const getStaticProps = async ({
	params: { id },
}: {
	params: { id: string };
}) => {
	const queryClient = await usePreFetch(`products${id}`, () =>
		getProductsDetailById(id)
	);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			id,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { result } = await getAllProductsId();
	const paths = result.map((item: any) => ({
		params: { id: item.id.toString() },
	}));
	return {
		paths,
		fallback: true,
	};
};

export default Products;
