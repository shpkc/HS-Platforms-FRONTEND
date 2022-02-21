import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import CarouselItem from "../common/CarouselItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { useState } from "react";
import HsText from "src/components/atoms/text/HsText";

const PrevArrow = props => {
	return (
		<HsContainer
			position={"absolute"}
			left={30}
			top={"219px"}
			display={["none", "block"]}
			zIndex={2}
		>
			<IoIosArrowBack
				color={"white"}
				style={{ cursor: "pointer", margin: "0 5px 0 0" }}
				size={62}
				onClick={props.onClick}
			/>
		</HsContainer>
	);
};

const NextArrow = props => {
	return (
		<HsContainer
			position={"absolute"}
			right={30}
			top={"calc(50% - 62px)"}
			display={["none", "block"]}
			zIndex={2}
		>
			<IoIosArrowForward
				color={"white"}
				style={{ cursor: "pointer" }}
				size={62}
				onClick={props.onClick}
			/>
		</HsContainer>
	);
};

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = useState(0);
	// NOTE : 1100px 기준으로 responsive slider setting
	const sliderSettings = {
		infinite: true,
		centerMode: true,
		variableWidth: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		beforeChange: (current, next) => setCurrentPage(next),
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
		<HsContainer padding={["61px 0", "100px 0 0 0"]} margin={[, "0 auto"]}>
			<HsContainer margin={"0 0 100px 0"}>
				<Slider {...sliderSettings}>
					{data.banner.map((item: AxiosResponse["data"], index) => (
						<CarouselItem
							item={item}
							key={item.id}
							selected={currentPage == index}
						/>
					))}
				</Slider>
			</HsContainer>
			<HsContainer width={[, "1100px"]} margin={[, "0 auto"]}>
				<HsText color={"white"} variant="h1">
					UPCOMING
				</HsText>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
