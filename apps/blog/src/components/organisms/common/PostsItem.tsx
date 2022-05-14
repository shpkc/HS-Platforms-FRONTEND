import { AxiosResponse } from "axios";
import Link from "next/link";
import { css } from "@emotion/react";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const PostsItem = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<Link href={`/courts/${data.id}`}>
			<HsContainer
				width={["48%", "260px"]}
				margin={["0 0 50px 0", "0 20px 50px 0"]}
				css={css`
					:nth-child(4n) {
						margin: 0 0 50px 0;
					}
				`}
				cursor="pointer"
			></HsContainer>
		</Link>
	);
};

export default PostsItem;
