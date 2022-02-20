import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import HsText from "src/components/atoms/text/HsText";

import { Carousel } from "react-responsive-carousel";
import HsImage from "src/components/atoms/image/HsImage";
import CarouselItem from "../common/CarouselItem";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	return (
		<HsContainer
			padding={"100px 15px 0 15px"}
			width={[, "1300px"]}
			margin={[, "0 auto"]}
		>
			<HsContainer>
				<HsContainer>
					<Carousel showArrows={false} showThumbs={false} showStatus={false}>
						<CarouselItem item={{ title: "axie" }} id={1} />
						<CarouselItem item={{ title: "axie" }} id={1} />
					</Carousel>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
