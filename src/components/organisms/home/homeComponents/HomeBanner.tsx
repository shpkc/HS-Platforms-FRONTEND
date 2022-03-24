import React from "react";
import { AxiosResponse } from "axios";
import HsContainer from "src/components/atoms/layout/HsContainer";
import { GameType } from "src/types/game";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BannerItem from "../../common/BannerItem";

const HomeBanner = ({ data }: { data: AxiosResponse["data"] }) => {
	const [currentPage, setCurrentPage] = React.useState(0);

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
					currentPage + 1 < data.banner.length &&
					setCurrentPage(currentPage + 1)
				}
			>
				<IoIosArrowForward />
			</HsContainer>
		</HsContainer>
	);
};

export default HomeBanner;
