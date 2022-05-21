import LayoutTemplate from "src/components/templates/LayoutTemplate";
import AboutContents from "src/components/organisms/about/AboutContents";
import { getPostsByAbsolutePath } from "src/apis/PostsDomain";
import { serialize } from "next-mdx-remote/serialize";

const About = ({ title, date, description, content }) => {
	return (
		<LayoutTemplate seo={{ title, description }}>
			<AboutContents data={content} />
		</LayoutTemplate>
	);
};
export const getStaticProps = async () => {
	// NOTE : about 페이지 static about
	const post = getPostsByAbsolutePath({
		path: "about",
		category: "about",
		fields: ["title", "date", "content", "description"],
		needPrefix: true,
	});
	const mdxSource = await serialize(post.content);

	return {
		props: {
			title: post.title,
			date: post.date,
			description: post.description,
			content: mdxSource,
		},
	};
};
export default About;
