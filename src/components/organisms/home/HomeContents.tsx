import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import CarouselItem from "../common/CarouselItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

const PrevArrow = props => {
	return (
		<HsContainer
			position={"absolute"}
			left={30}
			top={"219px"}
			display={["none", "block"]}
			zIndex={999}
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
	// NOTE : 1100px 기준으로 responsive setting
	const sliderSettings = {
		infinite: true,
		centerMode: true,
		variableWidth: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
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
			<HsContainer>
				<HsContainer position={"relative"}>
					<Slider {...sliderSettings}>
						{data.banner.map((item: AxiosResponse["data"]) => (
							<CarouselItem item={item} key={item.id} />
						))}
					</Slider>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
