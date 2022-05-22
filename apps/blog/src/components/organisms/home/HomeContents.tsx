import React from "react";
import { AxiosResponse } from "axios";
import { HsContainer } from "@hs-platforms/hs-core-ui";
import PostsItem from "src/components/organisms/common/PostsItem";
import { PostType } from "src/types/post";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<HsContainer padding={"150px 0 0 0"}>
			{data.map((item: PostType) => (
				<PostsItem data={item} key={item.id} />
			))}
		</HsContainer>
	);
};

export default HomeContents;
