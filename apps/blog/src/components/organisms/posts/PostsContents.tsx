import { HsContainer } from "@hs-platforms/hs-core-ui";
import ReactMarkdown from "react-markdown";

const PostsContents = ({ data }) => {
	console.log(data);
	return (
		<HsContainer
			padding={["100px 16px 0 16px", "140px 0 0 0"]}
			minHeight={"100vh"}
		>
			<ReactMarkdown children={data.contents} />
		</HsContainer>
	);
};

export default PostsContents;
