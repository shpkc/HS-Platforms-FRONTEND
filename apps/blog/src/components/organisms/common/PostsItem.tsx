import Link from "next/link";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";
import { PostType } from "src/types/post";

const PostsItem = ({ data }: { data: PostType }) => {
	return (
		<Link href={`/posts/${data.slug}`}>
			<HsContainer
				margin={"0 auto 50px auto"}
				borderBottom={"1px solid #f2f2f2"}
				padding={["0 20px 30px 20px", "0 0 30px"]}
				cursor={"pointer"}
			>
				<HsContainer
					position={"relative"}
					overflow={"hidden"}
					width={"100%"}
					cursor="pointer"
					border={"1px solid #f2f2f2"}
					margin={"0 0 30px 0"}
				>
					<HsContainer padding={"50% 0 0 0"} />
					<HsContainer
						position={"absolute"}
						top={"0"}
						bottom={"0"}
						left={"0"}
						right={"0"}
					>
						<HsImage
							src={data.thumbnail}
							borderRadius={"8px"}
							height={"100%"}
							objectFit={"cover"}
						/>
					</HsContainer>
				</HsContainer>
				<HsText variant={"h4"} margin={"0 0 20px 0"}>
					{data.title}
				</HsText>
				<HsText color={"gray.gray20"} margin={"0 0 12px 0"} fontSize={"1.1rem"}>
					{data.subTitle}
				</HsText>
				<HsText color={"gray.gray20"}>{data.createdAt.slice(0, 10)}</HsText>
			</HsContainer>
		</Link>
	);
};

export default PostsItem;
