import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";
import HsImage from "src/components/atoms/image/HsImage";
import { css } from "@emotion/react";

const BannerItem = ({ item }: { item: AxiosResponse["data"] }) => {
	return (
		<Link href={`/nft/collections/${item.id}`}>
			<HsContainer height={["310px", "580px"]} cursor="pointer">
				<HsImage
					src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${item.id}/thumbnail.jpeg`}
					objectFit={"cover"}
				/>
				<HsContainer width={[, "1200px"]} position={"relative"} margin="0 auto">
					<HsContainer
						position={"absolute"}
						left={[0, 0]}
						bottom={[0, 80]}
						zIndex={2}
						width={["100%", "450px"]}
						padding={["12px", "32px"]}
						minHeight={["auto", "68px"]}
						backgroundColor="rgba(44, 49, 65, 0.8)"
					>
						<HsText
							color={"white"}
							textAlign="left"
							fontWeight={"bold"}
							margin={["0 0 8px 0", "0 0 20px 0"]}
							fontSize={["1rem", "1.8rem"]}
							lineHeight={["24px", "32px"]}
						>
							{item.title}
						</HsText>
						<HsText
							color={"white"}
							textAlign="left"
							fontSize={["0.8rem", "1.2rem"]}
						>
							{item.description}
						</HsText>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default BannerItem;
