import React from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import CarouselItem from "../common/CarouselItem";
import Slider from "react-slick";
import { Suspense } from "react";
import HsText from "src/components/atoms/text/HsText";
import { PrevArrow, NextArrow } from "./homeComponents/CarouselArrow";
import GameItem from "../common/GameItem";
import Link from "next/link";
import UpcomingItem from "./homeComponents/UpcomingItem";
import { GameType } from "src/types/game";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = React.useState(0);
	// NOTE : 1100px 기준으로 responsive slider setting
	const sliderSettings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		beforeChange: (_, next) => setCurrentPage(next),
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					infinite: true,
					centerMode: false,
					variableWidth: false,
				},
			},
		],
	};

	return (
		<HsContainer padding={["61px 0 0 0", "100px 0 0 0"]} margin={[, "0 auto"]}>
			<HsContainer margin={["0 0 60px 0", "0 0 100px 0"]}>
				<Suspense fallback={<div />}>
					<Slider {...sliderSettings}>
						{data.banner.map((item: GameType, index) => (
							<CarouselItem
								item={item}
								key={item.id}
								selected={currentPage == index}
							/>
						))}
					</Slider>
				</Suspense>
			</HsContainer>
			<HsContainer
				width={[, "1100px"]}
				padding="50px 0"
				margin={["0 20px", "0 auto"]}
				backgroundColor="#F8F9FA"
			>
				<HsText
					textAlign={"center"}
					fontWeight="bold"
					fontSize={"1.5rem"}
					margin="0 0 15px 0"
				>
					Start Your NFT Trade Here
				</HsText>
				<HsText textAlign={"center"} margin="0 0 10px 0" fontSize={"1.2rem"}>
					You can create and transfer your own GAME NFTs
				</HsText>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
