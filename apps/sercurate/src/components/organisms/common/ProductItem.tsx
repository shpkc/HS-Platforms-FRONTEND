import { AxiosResponse } from "axios";
import Link from "next/link";
import { css } from "@emotion/react";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";
import { AiFillStar } from "react-icons/ai";
import { categoryHelper } from "src/services/helper/categoryHelper";

const ProductItem = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<Link href={`/products/${data.id}`}>
			<HsContainer
				width={[, "290px"]}
				margin={["0 0 50px 0", "0 13px 50px 0"]}
				css={css`
					:nth-child(4n) {
						margin: 0 0 50px 0;
					}
				`}
				cursor="pointer"
			>
				<HsContainer height={[, "170px"]}>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/products/${data.id}/thumbnail.jpeg`}
						borderRadius="4px"
						objectFit="cover"
					/>
				</HsContainer>
				<HsText
					fontWeight={"bold"}
					fontSize={"1.3rem"}
					margin="16px 0 12px 0"
					lineHeight={1.2}
					ellipsis
				>
					{data.name}
				</HsText>
				<HsContainer
					borderBottom={"1px solid rgba(34,34,34,.05)"}
					padding="0 0 12px 0"
					margin="0 0 12px 0"
				>
					<HsText fontWeight={500} fontSize={"1.1rem"}>
						내 손안의 수의사 소환 !
					</HsText>
				</HsContainer>
				<HsContainer
					display={"flex"}
					justifyContent="space-between"
					alignItems={"center"}
				>
					<HsText color={"#555555"} fontSize={"0.9rem"}>
						{categoryHelper(data.category)}
					</HsText>
					<HsContainer display={"flex"}>
						<AiFillStar size={20} />
						<HsText
							lineHeight={0.9}
							margin="0 0 0 3px"
							fontWeight={500}
							fontSize={"1.2	rem"}
						>
							4.0
						</HsText>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default ProductItem;
