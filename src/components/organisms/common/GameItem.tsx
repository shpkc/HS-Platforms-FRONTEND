import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";
import styled from "@emotion/styled";

const GameItem = ({
	item,
	id,
}: {
	item: AxiosResponse["data"];
	id: number;
}) => {
	return (
		<Link href={`games/detail/${id}`}>
			<HsContainer margin={20} border="1px solid #222227" borderRadius={16}>
				<Thumbnail
					src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${id}/thumbnail.jpeg`}
				/>
				<HsContainer padding={20}>
					<HsText color="white" marginBottom={15} variant={"h3"}>
						{item.title}
					</HsText>
					<HsText color="gray10" marginBottom={15}>
						{item.description.slice(0, 120)}
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
`;
