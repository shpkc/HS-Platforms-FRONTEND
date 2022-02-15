import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import HomeContents from "src/components/organisms/home/HomeContents";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { usePrefetchCourts, useQueryCourts } from "src/hooks/query/useCourts";

const Index = () => {
	const { data, fetchNextPage } = useQueryCourts();
	return (
		<LayoutTemplate
			seo={{
				title: "테니스 플랫폼",
				description: "테니스 플랫폼",
			}}
		>
			<HomeContents data={data} nextPage={fetchNextPage} />
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePrefetchCourts();
	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
