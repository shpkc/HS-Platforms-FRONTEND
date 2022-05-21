import { AxiosResponse } from "axios";
import Link from "next/link";
import { css } from "@emotion/react";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";
import { PostType } from "src/types/post";

const PostsItem = ({ data }: { data: PostType }) => {
	return (
		<Link href={`/posts/${data.slug}`}>
			<HsContainer
				maxWidth={"700px"}
				margin={"0 auto 50px auto"}
				borderBottom={"1px solid #f2f2f2"}
				padding={"0 20px 30px 20px"}
				cursor={"pointer"}
			>
				<HsContainer
					cursor="pointer"
					border={"1px solid #f2f2f2"}
					margin={"0 0 30px 0"}
				>
					<HsImage src={data.thumbnail} borderRadius={"8px"} height={"100%"} />
				</HsContainer>
				<HsText variant={"h4"} margin={"0 0 20px 0"}>
					{data.title}
				</HsText>
				<HsText color={"gray.gray20"} margin={"0 0 16px 0"}>
					{data.description}
				</HsText>
				<HsText color={"gray.gray20"} fontSize={"1.1rem"}>
					{data.date}
				</HsText>
			</HsContainer>
		</Link>
	);
};

export default PostsItem;
