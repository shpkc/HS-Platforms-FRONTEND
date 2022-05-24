import { HsContainer, HsText } from "@hs-platforms/hs-core-ui";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { MarkdownWrapper } from "../markdown";

const PostsContents = ({
	source,
	title,
	date,
}: {
	source: MDXRemoteProps;
	title: string;
	date: string;
}) => {
	return (
		<HsContainer padding={["140px 16px 0 16px", "140px 0 0 0"]}>
			<HsText fontSize={"2rem"} fontWeight={"bold"} margin={"0 0 18px 0"}>
				{title}
			</HsText>
			<HsText color={"gray.gray20"}>{date}</HsText>
			<MarkdownWrapper>
				<MDXRemote {...source} />
			</MarkdownWrapper>
		</HsContainer>
	);
};

export default PostsContents;
