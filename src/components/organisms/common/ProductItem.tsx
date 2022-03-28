import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";
import { css } from "@emotion/react";
import { AiOutlinePicture } from "react-icons/ai";
import HsImage from "src/components/atoms/image/HsImage";
import { FaEthereum } from "react-icons/fa";

const ProductItem = ({ item }: { item: AxiosResponse["data"] }) => {
	return (
		<Link href={`/nft/products/${item.id}`}>
			<HsContainer
				width={[, "280px"]}
				margin={["0 0 50px 0", "0 26px 50px 0"]}
				css={css`
					:nth-child(4n) {
						margin: 0 0 50px 0;
					}
				`}
			>
				<HsContainer position="relative" height={[, "280px"]}>
					<HsImage src={item.image} borderRadius="4px" objectFit="cover" />
					{item.mediaType == "IMAGE" && (
						<HsContainer
							position={"absolute"}
							top={"12px"}
							left={"12px"}
							width="28px"
							height={"28px"}
							background="linear-gradient(109.81deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 103.77%)"
							borderRadius={"4px"}
							display="flex"
							alignItems={"center"}
							justifyContent="center"
						>
							<AiOutlinePicture color="white" size={20} />
						</HsContainer>
					)}
				</HsContainer>
				<HsText
					fontWeight={"500"}
					fontSize={"1.2rem"}
					margin="16px 0 12px 0"
					lineHeight={1.2}
					ellipsis
				>
					{item.title}
				</HsText>
				<HsContainer
					display={"flex"}
					justifyContent="space-between"
					borderBottom={"1px solid rgba(34,34,34,.05)"}
					padding="0 0 12px 0"
					margin="0 0 12px 0"
				>
					<HsText color={"gray.gray20"} fontSize="0.8rem">
						Price
					</HsText>
					<HsContainer display={"flex"} alignItems="center">
						<FaEthereum />
						<HsText fontWeight={500} margin="0 0 0 2px">
							{Number.isInteger(item.price)
								? item.price.toFixed(1)
								: item.price}
						</HsText>
						<HsText fontWeight={500} margin="0 0 0 2px">
							{item.currency}
						</HsText>
					</HsContainer>
				</HsContainer>
				<HsContainer
					display={"flex"}
					justifyContent="space-between"
					margin="0 0 10px 0"
				>
					<HsText color="gray.gray20" fontSize={"0.8rem"}>
						Creator
					</HsText>
					<HsText>{item.seller.slice(0, 8)}...</HsText>
				</HsContainer>
				<HsContainer display={"flex"} justifyContent="space-between">
					<HsText color="gray.gray20" fontSize={"0.8rem"}>
						Owner
					</HsText>
					<HsText>{item.owner.slice(0, 8)}...</HsText>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default ProductItem;
