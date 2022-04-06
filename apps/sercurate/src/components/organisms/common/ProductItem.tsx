import { AxiosResponse } from "axios";
import Link from "next/link";
import { css } from "@emotion/react";
import { HsContainer, HsText, HsImage } from "@hs-platforms/hs-core-ui";

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
			>
				<HsContainer height={[, "170px"]}>
					<HsImage
						src={`${process.env.NEXT_PUBLIC_IMG_HOST}/products/${data.id}/thumbnail.jpeg`}
						borderRadius="4px"
						objectFit="cover"
					/>
				</HsContainer>
				<HsText
					fontWeight={"500"}
					fontSize={"1.2rem"}
					margin="16px 0 12px 0"
					lineHeight={1.2}
					ellipsis
				>
					{data.name}
				</HsText>
			</HsContainer>
		</Link>
	);
};

export default ProductItem;
