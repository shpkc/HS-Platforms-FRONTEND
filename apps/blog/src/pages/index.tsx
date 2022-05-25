import { GetStaticProps } from "next";
import { getMain } from "src/apis/PostsDomain";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import HomeContents from "src/components/organisms/home/HomeContents";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { dehydrate } from "react-query";
import Skeleton from "src/components/organisms/skeleton/Skeleton";
const Index = () => {
	const { data, isFetching } = useFetch("main", () => getMain());
	if (isFetching) {
		return <Skeleton />;
	}
	return (
		<LayoutTemplate
			seo={{
				title: "Home",
				description: "Home",
			}}
		>
			<HomeContents data={data.result} />
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
