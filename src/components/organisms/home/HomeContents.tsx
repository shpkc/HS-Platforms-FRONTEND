import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../common/CarouselItem";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	console.log(data);
	return (
		<HsContainer
			padding={"100px 15px 0 15px"}
			width={[, "1200px"]}
			margin={[, "0 auto"]}
		>
			<HsContainer>
				<HsContainer>
					<Carousel
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						showThumbs={false}
					>
						<CarouselItem item={{ title: "Axie Infinity" }} id={1} />
						<CarouselItem item={{ title: "axie" }} id={1} />
					</Carousel>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
