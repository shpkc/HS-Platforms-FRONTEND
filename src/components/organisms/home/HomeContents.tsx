import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import CarouselItem from "../common/CarouselItem";
import Slider from "react-slick";
import { Suspense, useState } from "react";
import HsText from "src/components/atoms/text/HsText";
import { PrevArrow, NextArrow } from "./homeComponents/CarouselArrow";
import GameItem from "../common/GameItem";
import Link from "next/link";
import UpcomingItem from "./homeComponents/UpcomingItem";
import HsDivider from "src/components/atoms/divider/HsDivider";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = useState(0);
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
			<HsContainer margin={"0 0 100px 0"}>
				<Suspense fallback={<div />}>
					<Slider {...sliderSettings}>
						{data.banner.map((item: AxiosResponse["data"], index) => (
							<CarouselItem
								item={item}
								key={item.id}
								selected={currentPage == index}
							/>
						))}
					</Slider>
				</Suspense>
			</HsContainer>
			<HsContainer width={[, "1100px"]} margin={["0 20px", "0 auto"]}>
				<Link href={"/upcoming"}>
					<HsText
						color={"white"}
						fontWeight="bold"
						variant={"h4"}
						margin={["0 0 30px 0", "0 0 50px 0"]}
						cursor="pointer"
					>
						UPCOMING
					</HsText>
				</Link>
				<HsContainer
					display={"flex"}
					justifyContent={"space-between"}
					flexWrap={"wrap"}
					margin={["0 0 60px 0", "0 0 120px 0"]}
				>
					{data.upcoming.map((item: AxiosResponse["data"]) => (
						<UpcomingItem item={item} key={item.id} />
					))}
				</HsContainer>
				<HsDivider
					direction="horizontal"
					color={"#222227"}
					margin={["0 0 60px 0", "0 0 120px 0"]}
				/>
				<Link href={"/upcoming"}>
					<HsText
						color={"white"}
						fontWeight="bold"
						variant={"h4"}
						margin={["0 0 30px 0", "0 0 50px 0"]}
						cursor="pointer"
					>
						BEST
					</HsText>
				</Link>
				<HsContainer margin="0 0 50px 0">
					{data.best.map((item: AxiosResponse["data"]) => (
						<GameItem item={item} key={item.id} />
					))}
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
