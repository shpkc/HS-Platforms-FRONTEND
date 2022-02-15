import { css } from "@emotion/react";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsGrid from "src/components/atoms/layout/HsGrid";
import HsText from "src/components/atoms/text/HsText";
import { AxiosResponse } from "axios";
import Link from "next/link";

const CourtItem = ({
	item,
	id,
}: {
	item: AxiosResponse["data"];
	id: number;
}) => {
	return (
		<Link href={`courts/detail/${id}`}>
			<HsContainer padding="0 24px" margin="0 0 16px 0" cursor>
				<HsContainer padding="24px" backgroundColor="white" borderRadius>
					<HsGrid isAlignStart>
						<HsContainer
							colCenter
							rowCenter
							backgroundColor={item.isOnlineReservation ? "#ff8484" : "#7686f5"}
							css={roundStyle}
							margin="0 20px 0 0"
						>
							<HsText color="white" bold large lineHeight={26}>
								{item.name[0]}
							</HsText>
						</HsContainer>
						<HsContainer>
							<HsText bold color="gray">
								{item.city}
							</HsText>
							<HsText bold large margin="0 0 8px 0">
								{item.name}
							</HsText>
							<HsText color="gray" margin="0 0 8px 0">
								{item.courtType} | {item.numberOfCourts}
							</HsText>
							{item.isOnlineReservation ? (
								<HsText bold color="red">
									{item.reservation}
								</HsText>
							) : (
								<HsText bold color="lightBlue">
									{item.reservation}
								</HsText>
							)}
						</HsContainer>
					</HsGrid>
				</HsContainer>
			</HsContainer>
		</Link>
	);
};

export default CourtItem;

const roundStyle = css`
	width: 40px;
	height: 40px;
	border-radius: 40px;
`;
