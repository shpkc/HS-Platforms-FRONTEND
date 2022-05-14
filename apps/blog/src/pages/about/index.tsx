import LayoutTemplate from "src/components/templates/LayoutTemplate";
import AboutContents from "src/components/organisms/about/AboutContents";
import { useFetch, usePreFetch } from "src/hooks/query/fetch";
import { getPostsBySlug } from "src/apis/PostsDomain";
import { dehydrate } from "react-query";
import Skeleton from "src/components/organisms/skeleton/Skeleton";

const About = () => {
	const { data } = useFetch("about", () => getPostsBySlug("about"));
	if (!data) {
		return <Skeleton />;
	}
	return (
		<LayoutTemplate seo={{ title: "about", description: "about" }}>
			<AboutContents data={data.result} />
		</LayoutTemplate>
	);
};
export const getStaticProps = async () => {
	const queryClient = await usePreFetch("about", () => getPostsBySlug("about"));

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		},
	};
};
export default About;
