import React from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import { GameType } from "src/types/game";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BannerItem from "../../common/BannerItem";
import { css } from "@emotion/react";

const HomeBanner = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = React.useState(0);

	const indicator = () => {
		const indicatorLength = data.length;
	};
	console.log(Array(data.length));
	return (
		<HsContainer position={"relative"}>
			<Carousel
				showArrows={false}
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				selectedItem={currentPage}
			>
				{data.map((item: GameType) => (
					<BannerItem item={item} key={item.id} />
				))}
			</Carousel>
			<HsContainer
				borderRadius={50}
				width={"32px"}
				height={"32px"}
				backgroundColor="white"
				position={"absolute"}
				left={16}
				top={[274, 274]}
				display={["none", "flex"]}
				alignItems="center"
				justifyContent={"center"}
				cursor="pointer"
				onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
			>
				<IoIosArrowBack />
			</HsContainer>
			<HsContainer
				borderRadius={50}
				width={"32px"}
				height={"32px"}
				backgroundColor="white"
				position={"absolute"}
				right={16}
				top={[274, 274]}
				display={["none", "flex"]}
				alignItems="center"
				justifyContent={"center"}
				cursor="pointer"
				onClick={() =>
					currentPage + 1 < data.length && setCurrentPage(currentPage + 1)
				}
			>
				<IoIosArrowForward />
			</HsContainer>
			<HsContainer
				position={"absolute"}
				width="100%"
				bottom={["-24px", "24px"]}
				display={"flex"}
				justifyContent={"center"}
			>
				{Array.from({ length: data.length }).map((_, index) => (
					<HsContainer
						key={`banner${index}`}
						backgroundColor={
							currentPage == index ? "rgb(30, 35, 41)" : "rgb(183, 189, 198)"
						}
						width={currentPage == index ? "48px" : "16px"}
						height={"4px"}
						margin="0 5px"
					/>
				))}
			</HsContainer>
		</HsContainer>
	);
};

export default HomeBanner;
