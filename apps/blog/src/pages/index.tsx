import { GetStaticProps } from "next";
import { getPosts } from "src/apis/PostsDomain";
import LayoutTemplate from "src/components/templates/LayoutTemplate";
import HomeContents from "src/components/organisms/home/HomeContents";

const Index = ({ posts }) => {
	console.log(posts);
	return (
		<LayoutTemplate
			seo={{
				title: "Home",
				description: "Home",
			}}
		>
			<HomeContents data={posts} />
		</LayoutTemplate>
	);
};

export const getStaticProps: GetStaticProps = async => {
	const posts = getPosts(
		["id", "title", "description", "category", "slug", "date", "thumbnail"],
		"articles"
	);
	return {
		revalidate: 10,
		props: { posts },
	};
};
export default Index;
