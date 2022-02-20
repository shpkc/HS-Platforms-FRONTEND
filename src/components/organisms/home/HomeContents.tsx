import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../common/CarouselItem";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { css } from "@emotion/react";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<HsContainer padding={["61px 0", "100px 0 0 0"]} margin={[, "0 auto"]}>
			<HsContainer>
				<HsContainer position={"relative"} css={carouselStyle}>
					<Carousel
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						showThumbs={false}
						selectedItem={currentPage}
						infiniteLoop={true}
						centerMode={true}
					>
						{data.banner.map((item: AxiosResponse["data"]) => (
							<CarouselItem item={item} key={item.id} />
						))}
					</Carousel>
					<HsContainer
						position={"absolute"}
						left={30}
						top={"calc(50% - 62px)"}
						display={["none", "block"]}
					>
						<IoIosArrowBack
							color={"white"}
							style={{ cursor: "pointer", margin: "0 5px 0 0" }}
							size={62}
							onClick={() =>
								currentPage > 0
									? setCurrentPage(currentPage - 1)
									: setCurrentPage(data.banner.length - 1)
							}
						/>
					</HsContainer>
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
							onClick={() =>
								currentPage + 1 < data.banner.length
									? setCurrentPage(currentPage + 1)
									: setCurrentPage(0)
							}
						/>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;

const carouselStyle = css`
	@media (min-width: 1200px) {
		.slider-wrapper {
			/* li {
				min-width: 1200px !important;
				max-width: 1200px !important;
			} */
		}
	}
`;
