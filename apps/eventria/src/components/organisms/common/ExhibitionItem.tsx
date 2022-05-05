import { AxiosResponse } from "axios";
import Link from "next/link";
import { css } from "@emotion/react";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { categoryHelper } from "src/services/helper/categoryHelper";

const ExhibitionItem = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<Link href={`/exhibitions/${data.id}`}>
			<HsContainer
				width={["48%", "260px"]}
				margin={["0 0 50px 0", "0 20px 50px 0"]}
				css={css`
					:nth-child(4n) {
						margin: 0 0 50px 0;
					}
				`}
				cursor="pointer"
			>
				<HsContainer height={["auto", "320px"]}>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/exhibitions/${data.id}/thumbnail.jpeg`}
						borderRadius="4px"
					/>
				</HsContainer>
				<HsContainer
					borderBottom={"1px solid rgba(34,34,34,.05)"}
					margin="0 0 12px 0"
				>
					<HsText
						fontWeight={"bold"}
						fontSize={"1.1rem"}
						margin="16px 0 8px 0"
						lineHeight={1.3}
						height={"47px"}
					>
						{data.title}
					</HsText>
				</HsContainer>
				<HsText
					color={"#19316e"}
					fontSize={"0.9rem"}
					fontWeight="500"
					margin={"0 0 5px 0"}
				>
					{data.location}
				</HsText>
				<HsText
					color={"#888888"}
					fontSize={"0.9rem"}
					fontWeight="500"
					margin="0 0 10px 0"
				>
					{data.duration}
				</HsText>
				<HsContainer display={"flex"} alignItems="center">
					<AiFillHeart size={14} />
					<HsText margin={"0 3px"} lineHeight={0.9} fontSize="0.9rem">
						0
					</HsText>
					<AiFillStar size={16} />
					<HsText margin={"0 3px"} lineHeight={0.9} fontSize="0.9rem">
						{data.reviewScore.toFixed(1)}
					</HsText>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default ExhibitionItem;
