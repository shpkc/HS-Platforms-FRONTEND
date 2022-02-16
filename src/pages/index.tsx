import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { usePrefetchCourts, useQueryCourts } from "src/hooks/query/useCourts";

const Index = () => {
	const { data, fetchNextPage } = useQueryCourts();
	return <div />;
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
