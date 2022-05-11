import { GetStaticPaths } from "next";
import { dehydrate } from "react-query";
import ProductsContents from "src/components/organisms/products/ProductsContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import ProductsSkeleton from "src/components/organisms/skeleton/ProductsSkeleton";
import { getAllPostsSlug, getPostsBySlug } from "src/apis/PostsDomain";

const Posts = ({ slug }: { slug: string }) => {
	const { data } = useFetch(`posts${slug}`, () => getPostsBySlug(slug));
	if (!data) {
		return <ProductsSkeleton />;
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
	params: { slug },
}: {
	params: { slug: string };
}) => {
	const queryClient = await usePreFetch(`posts${slug}`, () =>
		getPostsBySlug(slug)
	);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			slug,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { result } = await getAllPostsSlug();
	const paths = result.map((item: any) => ({
		params: { slug: item.slug.toString() },
	}));

	return {
		paths,
		fallback: true,
	};
};

export default Posts;
