import LayoutTemplate from "src/components/templates/LayoutTemplate";
import PostsContents from "src/components/organisms/posts/PostsContents";
import {
	getPosts,
	getPostsByAbsolutePath,
	POSTS_DIRECTORY_PATH,
} from "src/apis/PostsDomain";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPaths } from "next";
import { join } from "path";

const Post = ({ title, date, description, content }) => {
	return (
		<LayoutTemplate seo={{ title, description }}>
			<PostsContents source={content} title={title} date={date} />
		</LayoutTemplate>
	);
};
export const getStaticProps = async ({ params }) => {
	// NOTE : about 페이지 static about
	const path = join(POSTS_DIRECTORY_PATH, "articles", `${params.slug}.mdx`);
	const post = getPostsByAbsolutePath({
		path: path,
		category: "articles",
		fields: ["title", "date", "content", "description"],
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
export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getPosts(["date", "slug", "title", "category"], "articles");
	return {
		paths: posts.map(item => {
			return {
				params: { slug: item.slug },
			};
		}),
		fallback: false,
	};
};

export default Post;
