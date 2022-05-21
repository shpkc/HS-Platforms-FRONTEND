import { HsContainer } from "@hs-platforms/hs-core-ui";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { MarkdownWrapper } from "../markdown";

const AboutContents = ({
	source,
	date,
}: {
	source: MDXRemoteProps;
	date: string;
}) => {
	return (
		<HsContainer padding={["140px 16px 0 16px", "140px 0 0 0"]}>
			<MarkdownWrapper>
				<MDXRemote {...source} />
			</MarkdownWrapper>
		</HsContainer>
	);
};

export default AboutContents;
