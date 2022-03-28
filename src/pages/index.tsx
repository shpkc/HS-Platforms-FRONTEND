import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getMain } from "src/domains/ProductsDomain";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import HomeContents from "src/components/organisms/home/HomeContents";
import MainSkeleton from "src/components/organisms/skeleton/MainSkeleton";

const Index = () => {
	const { data, isFetching } = useFetch("main", () => getMain());
	if (isFetching) {
		return <MainSkeleton />;
	}
	return (
		<LayoutTemplate
			seo={{
				title: "Your Own NFTs",
				description: "World Wide NFTs",
			}}
		>
			<HomeContents data={data} />
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePreFetch("main", () => getMain());

	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
