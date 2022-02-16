import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";

import { AxiosResponse } from "axios";
import Link from "next/link";
import styled from "@emotion/styled";
import HsButton from "src/components/atoms/button/HsButton";
import HsDivider from "src/components/atoms/divider/HsDivider";

const GameItem = ({
	item,
	id,
}: {
	item: AxiosResponse["data"];
	id: number;
}) => {
	return (
		<Link href={`games/detail/${id}`}>
			<HsContainer
				border="1px solid #222227"
				borderRadius={16}
				width={[, "650px"]}
				margin={[, "0 auto"]}
			>
				<Thumbnail
					src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${id}/thumbnail.jpeg`}
				/>
				<HsContainer padding={20}>
					<HsText color="white" marginBottom={15} variant="h3">
						{item.title}
					</HsText>
					<HsText color="gray.gray10" marginBottom={20} lineHeight={1.5}>
						{item.description.slice(0, 130)}...
					</HsText>
					<HsButton
						borderRadius={12}
						height={50}
						color="white"
						backgroundColor="purple.primary"
						margin="0 0 20px 0"
					>
						READ MORE
					</HsButton>
					<HsDivider
						direction="vertical"
						color="#222227"
						height={1}
						margin="0 0 20px 0"
					/>
					<HsText fontSize={18} color={"white"}>
						© {item.developer}
					</HsText>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default GameItem;

const Thumbnail = styled.img`
	width: 100%;
	border-radius: 16px;
	cursor: pointer;
`;
