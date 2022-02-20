import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../common/CarouselItem";
import { useState } from "react";
import HsText from "src/components/atoms/text/HsText";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeContents = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = useState(0);
	return (
		<HsContainer
			padding={["61px 0", "100px 15px 0 15px"]}
			width={[, "1200px"]}
			margin={[, "0 auto"]}
		>
			<HsContainer>
				<HsContainer position={"relative"}>
					<Carousel
						showArrows={false}
						showStatus={false}
						showIndicators={false}
						showThumbs={false}
						selectedItem={currentPage}
					>
						{data.banner.map((item: AxiosResponse["data"]) => (
							<CarouselItem item={item} key={item.id} />
						))}
					</Carousel>
					<HsContainer
						position={"absolute"}
						bottom={0}
						right={0}
						padding={"20px"}
						display={["none", "flex"]}
					>
						<HsText color={"white"} margin="0 10px 0 0">
							{currentPage + 1} / {data.banner.length}
						</HsText>
						<HsContainer display={"flex"}>
							<IoIosArrowBack
								color={"white"}
								style={{ cursor: "pointer", margin: "0 5px 0 0" }}
								size={20}
								onClick={() =>
									currentPage > 0 && setCurrentPage(currentPage - 1)
								}
							/>
							<IoIosArrowForward
								color={"white"}
								style={{ cursor: "pointer" }}
								size={20}
								onClick={() =>
									currentPage + 1 < data.banner.length &&
									setCurrentPage(currentPage + 1)
								}
							/>
						</HsContainer>
					</HsContainer>
				</HsContainer>
			</HsContainer>
		</HsContainer>
	);
};

export default HomeContents;
