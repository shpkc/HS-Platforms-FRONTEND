import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsGrid from "src/components/atoms/layout/HsGrid";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";
import styled from "@emotion/styled";
import TempContainer from "src/components/atoms/layout/TempContainer";

const CourtItem = ({
	item,
	id,
}: {
	item: AxiosResponse["data"];
	id: number;
}) => {
	return (
		<Link href={`games/detail/${id}`}>
			<HsContainer padding="0 15px" margin="0 0 20px 0" cursor>
				<Thumbnail
					src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${id}/thumbnail.jpeg`}
				/>
				<HsContainer padding="20px">
					<HsText color="white" h1 margin="0 0 15px 0">
						{item.title}
					</HsText>
					<HsText color="#bdbdbd" margin="0 0 15px 0" large>
						{item.description.slice(0, 120)}
					</HsText>
				</HsContainer>
				<TempContainer color="white" bg="white" width={["100px", "1000px"]}>
					hello
				</TempContainer>
			</HsContainer>
		</Link>
	);
};

export default CourtItem;

const Thumbnail = styled.img`
	border-radius: 16px;
`;
