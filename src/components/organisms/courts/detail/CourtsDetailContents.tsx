import React, { useState } from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/OldContainer";
import HsText from "src/components/atoms/text/OldText";
import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";
import { css } from "@emotion/react";
import HsGrid from "src/components/atoms/layout/HsGrid";
import { FaParking } from "react-icons/fa";
import { AiFillAppstore, AiFillLayout, AiFillPhone } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import KakaoMap from "src/services/utils/kakaoMap";

const CourtsDetailContents = ({
	data,
	id,
}: {
	data: AxiosResponse["data"];
	id: number;
}) => {
	const [currentImg, setCurrentImg] = useState(1);

	return (
		<HsContainer padding="48px 0 0 0">
			<HsContainer margin="0 0 30px 0" relative>
				{data.imgLength > 0 ? (
					<HsContainer>
						<Carousel
							showArrows={false}
							showThumbs={false}
							showIndicators={false}
							showStatus={false}
							onChange={index => setCurrentImg(index + 1)}
						>
							{Array.from(Array(data.imgLength).keys()).map((index: number) => (
								<CourtImg
									src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${id}/${index}.jpeg`}
									key={index}
								/>
							))}
						</Carousel>
						<HsContainer css={imgStatus}>
							<HsText color="white">
								{currentImg}/{data.imgLength}
							</HsText>
						</HsContainer>
					</HsContainer>
				) : (
					<CourtImg src={"/images/court_default.jpeg"} />
				)}
			</HsContainer>
			<HsContainer padding="0 24px">
				<HsContainer
					colCenter
					rowCenter
					backgroundColor={data.isOnlineReservation ? "#ff8484" : "#7686f5"}
					css={roundStyle}
					margin="0 0 10px 0"
				>
					<HsText color="white" bold large lineHeight={26}>
						{data.name[0]}
					</HsText>
				</HsContainer>
				<HsText bold h2 margin="0 0 20px 0">
					{data.name}
				</HsText>
				<HsText color="gray" margin="0 0 20px 0">
					{data.city} | {data.reservation}
				</HsText>
				<HsContainer
					minWidth="100%"
					height="1px"
					backgroundColor="rgba(42, 47, 61, 0.08)"
					margin="0 0 20px 0"
				/>
				<HsText bold color="darkBlue" margin="0 0 20px 0">
					테니스장 소개
				</HsText>
				<HsText
					color="rgba(42, 47, 61, 0.64)"
					lineHeight={22}
					margin="0 0 20px 0"
				>
					{data.introduction}
				</HsText>
				<HsGrid margin="0 0 5px 0">
					<AiFillAppstore />
					<HsText padding="0 0 0 10px" regular lineHeight={22}>
						{data.courtType}
					</HsText>
				</HsGrid>
				<HsGrid margin="0 0 5px 0">
					<AiFillLayout />
					<HsText padding="0 0 0 10px" regular lineHeight={22}>
						{data.numberOfCourts}
					</HsText>
				</HsGrid>
				<HsGrid margin="0 0 5px 0">
					<BsFillCalendarCheckFill />
					<HsText padding="0 0 0 10px" regular lineHeight={22}>
						{data.reservation}
					</HsText>
				</HsGrid>
				<HsGrid margin="0 0 5px 0">
					<FaParking />
					<HsText padding="0 0 0 10px" regular lineHeight={22}>
						{data.isParking ? "주차 가능" : "주차 미정"}
					</HsText>
				</HsGrid>
				<HsGrid margin="0 0 20px 0">
					<AiFillPhone />
					<HsText padding="0 0 0 10px" regular lineHeight={22}>
						{data.phone}
					</HsText>
				</HsGrid>
				<HsContainer
					minWidth="100%"
					height="1px"
					backgroundColor="rgba(42, 47, 61, 0.08)"
					margin="0 0 20px 0"
				/>
				<HsText regular lineHeight={22} margin="0 0 20px 0">
					{data.address}
				</HsText>
				<HsContainer margin="0 0 100px 0">
					<KakaoMap lat={data.lat} lng={data.lng} title={data.name} />
				</HsContainer>
			</HsContainer>
			{data.isOnlineReservation && (
				<HsContainer
					padding="0 24px"
					css={stickyStyle}
					onClick={() => window.open(data.reservationLink)}
				>
					<HsContainer css={reservationButtonStyle} colCenter rowCenter>
						<HsText bold large color="white">
							온라인 예약하기
						</HsText>
					</HsContainer>
				</HsContainer>
			)}
		</HsContainer>
	);
};

export default CourtsDetailContents;

const CourtImg = styled.img`
	width: 100%;
	height: 280px;
	object-fit: cover;
`;

const imgStatus = css`
	position: absolute;
	right: 10px;
	bottom: 10px;
	background-color: rgba(61, 61, 61, 0.5);
	border-radius: 50px;
	padding: 3px 10px;
`;

const roundStyle = css`
	width: 40px;
	height: 40px;
	border-radius: 40px;
`;

const stickyStyle = css`
	position: sticky;
	bottom: 24px;
	width: 100%;
	z-index: 100;
`;
const reservationButtonStyle = css`
	background: linear-gradient(
		45deg,
		rgb(126, 108, 245) 0%,
		rgb(108, 163, 245) 100%
	);
	height: 56px;
	width: 100%;
	border-radius: 8px;
`;
