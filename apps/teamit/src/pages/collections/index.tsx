import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import {
	useFetch,
	useFetchInfinite,
	usePreFetch,
	usePreFetchInfinite,
} from "src/hooks/query/fetch";
import { getMain } from "src/apis/CourtsDomain";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import { getCollections } from "src/apis/CollectionsDomain";
import CollectionsContents from "src/components/organisms/collections/CollectionsContents";

const Index = () => {
	const { data, isFetching, fetchNextPage } = useFetchInfinite(
		"collections",
		() => getCollections({ pageParam: 1 })
	);
	if (isFetching) {
		return <div />;
	}
	return (
		<LayoutTemplate
			seo={{
				title: "컬렉션",
				description: "테니스 플랫폼",
			}}
		>
			<CollectionsContents data={data} nextPage={fetchNextPage} />
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePreFetchInfinite("main", () => getMain());

	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
