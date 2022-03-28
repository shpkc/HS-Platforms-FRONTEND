import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import HsContainer from "src/components/atoms/layout/HsContainer";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { getProductsDetailById } from "src/domains/NftsDomain";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";

const ProductDetail = ({ id }) => {
	console.log(id);
	const {
		data: { result },
	} = useFetch(`product${id}`, () => getProductsDetailById(id));
	return (
		<LayoutTemplate
			seo={{ title: result.title, description: result.description }}
		>
			<HsContainer padding={"100px 0 0 0"}>{result.title}</HsContainer>
		</LayoutTemplate>
	);
};

export default ProductDetail;

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
