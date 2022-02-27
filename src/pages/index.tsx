import { dehydrate } from "react-query";
import { GetStaticProps } from "next";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getMainGames } from "src/domains/GamesDomain";
import dynamic from "next/dynamic";

const HomeContents = dynamic(
	() => import("src/components/organisms/home/HomeContents")
);

const Index = () => {
	const { data } = useFetch("main", () => getMainGames());
	return <HomeContents data={data} />;
};

export const getStaticProps: GetStaticProps = async context => {
	const queryClient = await usePreFetch("main", () => getMainGames());

	return {
		revalidate: 10,
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default Index;
