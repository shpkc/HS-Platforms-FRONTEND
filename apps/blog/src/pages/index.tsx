import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getPosts } from "src/apis/PostsDomain";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import HomeContents from "src/components/organisms/home/HomeContents";
import Skeleton from "src/components/organisms/skeleton/Skeleton";

const Index = () => {
	const { data, isFetching } = useFetch("posts", () =>
		getPosts({ pageParam: 1 })
	);
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
			<HomeContents data={data} />
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePreFetch("posts", () =>
		getPosts({ pageParam: 1 })
	);

	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
